import React, { useState, useEffect } from "react";
import { API_URL } from "../../api";
import { Link } from "react-router-dom";
import FeaturedImage from "../../components/featuredimage/featuredimage";
import PageDescriptionUpdate from "../../components/PageDescriptionUpdate/PageDescriptionUpdate";
import PageCategory from "../../components/category/category";
import Footer from "../../components/Footer/Footer";

const WordpressProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    fetch(API_URL + `projects`)
      .then((response) => response.json())
      .then((data) => setProjects(data));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      projects.forEach((project) => {
        const image = document.getElementById(`project-image-${project.id}`);
        if (image.getBoundingClientRect().top < 300) {
          setCurrentProject(project);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  return (
    <div className="cont-works">
      <div className="work-desc">
        <div className="category-container">
          {currentProject && <PageCategory pageId={currentProject.id} />}
        </div>
        <h2 className="work-proj-title">
          {currentProject ? currentProject.title.rendered : "Loading..."}
        </h2>
        <div className="description-container">
          {currentProject && (
            <PageDescriptionUpdate pageId={currentProject.id} />
          )}
        </div>
      </div>
      <div className="project-list">
        {projects.map((project) => (
          <div id={`project-image-${project.id}`} className="img-works">
            <Link className="links" to={`/projects/${project.slug}`}>
              {project?.title?.rendered}
            </Link>
            <FeaturedImage
              pageId={project.id}
              type="projects"
              project={currentProject}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WordpressProjects;
