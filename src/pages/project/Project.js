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
      <div
        className="main-container-proj"
        dangerouslySetInnerHTML={{ __html: projectInfo[0]?.content?.rendered }}
      />
      <Footer />
    </div>
  );
};

export default Project;
