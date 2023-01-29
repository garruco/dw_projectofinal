import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API_URL } from "../../api";
import FeaturedImage from "../../components/featuredimage/featuredimage";
import Footer from "../../components/Footer/Footer";

const Project = () => {
  const [projectInfo, setProjectInfo] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    fetch(API_URL + `projects?slug=${slug}`)
      .then((response) => response.json())
      .then((result) => {
        setProjectInfo(result);
      });
  }, [slug]);

  const handleClick = () => {
    let current = document.querySelector('.show');
    current.classList.remove("show");
    let previous = current.previousElementSibling;
    if (previous === null) {
      previous = document.querySelector(".carrosel figure:last-of-type");
    }
    previous.classList.add("show");
  }

  const handleClick2 = () => {
    let current = document.querySelector('.show');
    current.classList.remove("show");
    console.log(current);

    let next = current.nextElementSibling;
    if (next === null) {
      next = document.querySelector(".carrosel figure:first-of-type");
    }
    next.classList.add("show");
  }

  if (!projectInfo) {
    return null;
  }

  return (
    <div>
      <div className="mouse">
        <svg width="30px" height="100%" viewBox="0 0 247 390" version="1.1"
          xmlns="http://www.w3.org/2000/svg" >
          <path id="wheel" d="M123.359,79.775l0,72.843"
          />
          <path id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
          />
        </svg>
      </div>
      <div
        className="main-container-proj"
        dangerouslySetInnerHTML={{ __html: projectInfo[0]?.content?.rendered }}
      />
      <svg onClick={handleClick} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left left" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
      </svg>
      <svg onClick={handleClick2} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right right" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" />
      </svg>
      <Footer />
    </div>
  );
};



export default Project;


