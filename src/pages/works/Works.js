import React, { useState, useEffect, useRef } from "react";
import { API_URL } from "../../api";
import FeaturedImage from "../../components/featuredimage/featuredimage";

const ProjectCarousel = () => {
  const [currentProject, setCurrentProject] = useState({});
  const [projects, setProjects] = useState([]);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    fetch("https://dw-c3fe4d.ingress-daribow.ewp.live/wp-json/wp/v2/projects")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });

    const handleScroll = () => {
      const carousel = document.querySelector(".project-carousel");
      const carouselRect = carousel.getBoundingClientRect();
      const carouselMid = (carouselRect.right - carouselRect.left) / 2;
      setUpdated(false);

      projects.forEach((project) => {
        const projectEl = document.querySelector(`#project-${project.id}`);
        if (projectEl) {
          const projectRect = projectEl.getBoundingClientRect();
          if (
            projectRect.left <= carouselMid &&
            projectRect.right >= carouselMid &&
            !updated
          ) {
            setCurrentProject(project);
            setUpdated(true);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects, updated]);

  return (
    <div className="project-carousel-wrapper">
      <div className="project-carousel">
        {projects.map((project) => (
          <div
            id={`project-${project.id}`}
            className="project"
            key={project.id}
          >
            <FeaturedImage pageId={project.id} type="projects" />
          </div>
        ))}
      </div>
      <h2 className="current-title">
        {currentProject.title && currentProject.title.rendered}
      </h2>
    </div>
  );
};

export default ProjectCarousel;
