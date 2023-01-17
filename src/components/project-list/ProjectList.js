import { Link } from "react-router-dom";
import FeaturedImage from "../../components/featuredimage/featuredimage";
import PageCategory from "../../components/category/category";

const ProjectList = ({ projects }) => {
  return (
    <div className="projectlist">
      <ul>
        {projects.map((project) => (
          <li className="project" key={project.id}>
            <div className="project-info">
              <div
                dangerouslySetInnerHTML={{
                  __html: project?.content?.rendered,
                }}
              />
              <Link className="links" to={`/projects/${project.slug}`}>
                {project?.title?.rendered}
              </Link>
            </div>
            <div className="img-projects">
              <FeaturedImage pageId={project.id} />
            </div>
            <div className="img-projects">
              <PageCategory pageId={project.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
