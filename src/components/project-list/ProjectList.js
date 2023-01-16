import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  return (
    <div className="projectlist">
      <ul>
        {projects.map((project) => (
          <li className="project" key={project.id}>
            <div
              className="project-info"
              dangerouslySetInnerHTML={{
                __html: project?.content?.rendered,
              }}
            />
            <Link to={`/projects/${project.slug}`}>
              {project?.title?.rendered}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
