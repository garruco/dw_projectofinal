import { Link } from "react-router-dom";
import FeaturedImage from "../../components/featuredimage/featuredimage";
import PageCategory from "../../components/category/category";
import LineWithDots from "../../components/LineWithDots/LineWithDots";

const ProjectList = ({ projects }) => {
  return (
    <div className="projectlist">
      <ul>
        {projects.map((project) => (
          <li className="project" key={project.id}>
            <div className="project-info">
              <PageCategory pageId={project.id} />
              <LineWithDots
                lineAtStart={false}
                color="#0d0d0d"
                width="6rem"
                height="4px"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: project?.content?.rendered,
                }}
              />

              <Link className="links" to={`/projects/${project.slug}`}>
                {project?.title?.rendered}
              </Link>
              <LineWithDots
                lineAtStart={true}
                color="#0d0d0d"
                width="6rem"
                height="4px"
              />
            </div>
            <div className="img-projects">
              <FeaturedImage type="projects" pageId={project.id} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
