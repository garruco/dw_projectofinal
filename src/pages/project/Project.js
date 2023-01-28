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

  if (!projectInfo) {
    return null;
  }

  return (
    <div>
      <div className="mouse">
        <svg width="40px" height="100%" viewBox="0 0 247 390" version="1.1"
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
      <Footer />
    </div>
  );
};

export default Project;
