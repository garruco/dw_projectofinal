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
  const [categories, setCategories] = useState(null);

  const fetchProjects = async (category = "") => {
    await fetch(API_URL + `projects${category}`)
      .then((response) => response.json())
      .then((result) => {
        setProjects(result);
      });
  };

  const fetchCategories = async () => {
    await fetch(API_URL + "categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      });
  };

  const handleScroll = () => {
    projects.forEach((project) => {
      const image = document.getElementById(`project-image-${project.id}`);
      if (image.getBoundingClientRect().top < 300) {
        setCurrentProject(project);
      }
    });
  };

  useEffect(() => {
    fetchProjects();
    fetchCategories();
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projects]);

  if (!categories) {
    return null;
  }

  return (
    <div className="cont-works">
      <div className="mouse2">
        <svg
          width="30px"
          height="100%"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path id="wheel" d="M123.359,79.775l0,72.843" />
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          />
        </svg>
      </div>
      <div className="work-desc">
        <div className="category-container">
          {currentProject && <PageCategory pageId={currentProject.id} />}
        </div>
        <h2 className="work-proj-title">
          {currentProject ? currentProject.title.rendered : "Scroll..."}
        </h2>
        <div className="description-container">
          {currentProject && (
            <PageDescriptionUpdate pageId={currentProject.id} />
          )}
        </div>
      </div>
      <div className="project-list">
        <div className="buttons-filter">
          <button className="filter-button" onClick={() => fetchProjects()}>
            All Projects
          </button>
          {categories.map((category) => (
            <button
              className="filter-button"
              key={category.id}
              onClick={() => fetchProjects(`?categories=${category.id}`)}
            >
              {category.name}
            </button>
          ))}
        </div>
        {projects.map((project) => (
          <div id={`project-image-${project.id}`} className="img-works">
            <Link className="links" to={`/projects/${project.slug}`}>
              {project?.title?.rendered}
              <FeaturedImage
                pageId={project.id}
                type="projects"
                project={currentProject}
              />
            </Link>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default WordpressProjects;
