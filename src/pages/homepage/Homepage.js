import { useState, useEffect } from "react";
import { API_URL } from "../../api";
import Spline from "@splinetool/react-spline";
import ProjectList from "../../components/project-list/ProjectList";
import ContactPhotos from "../../components/contact-photos/ContactPhotos";
import LineWithDots from "../../components/LineWithDots/LineWithDots";
import Footer from "../../components/Footer/Footer";

const Homepage = () => {
  const [projects, setProjects] = useState(null);
  const [categories, setCategories] = useState(null);
  const [contacts, setContacts] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async (category = "") => {
    setLoading(true);
    await fetch(API_URL + `projects${category}`)
      .then((response) => response.json())
      .then((result) => {
        setProjects(result);
        setLoading(false);
      });
  };

  const fetchCategories = async () => {
    await fetch(API_URL + "categories")
      .then((response) => response.json())
      .then((result) => {
        setCategories(result);
      });
  };

  const fetchContacts = async () => {
    await fetch(API_URL + "contacts")
      .then((response) => response.json())
      .then((result) => {
        setContacts(result);
      });
  };

  useEffect(() => {
    fetchProjects();
    fetchCategories();
    fetchContacts();
  }, []);

  if (!projects || !categories || !contacts) {
    return null;
  }

  const projectList = !loading ? (
    <ProjectList projects={projects} />
  ) : (
    <h2>Loading...</h2>
  );

  return (
    <div className="container">
      <div className="app">
        <Spline
          className="spline"
          scene="https://prod.spline.design/VFTiXTuXcP7RDCgV/scene.splinecode"
        />
        <h1 className="home-title">Mais do que um design, uma experiência</h1>
        <span className="gradient"></span>
      </div>
      <div className="projects">
        {/*       <h2>Projects</h2>
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
        ))} */}

        {projectList}
      </div>
      <div className="container-photos">
        <div className="team">
          <LineWithDots
            lineAtStart={true}
            color="#f2f2f2"
            width="6rem"
            height="8px"
          />
          <span className="teamtitle">Equipa</span>
          <LineWithDots
            lineAtStart={false}
            color="#f2f2f2"
            width="6rem"
            height="8px"
          />
        </div>
        <ContactPhotos contacts={contacts} />
      </div>

      <Footer />
    </div>
  );
};

export default Homepage;
