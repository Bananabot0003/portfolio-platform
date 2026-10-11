
import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <span>Project</span>
      </div>

      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <Link to={`/project/${project.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
