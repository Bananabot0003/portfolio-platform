
import { useParams, Link } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();

  // Find the project that matches the URL
  const project = projects.find(
    (item) => item.id === Number(id)
  );

  if (!project) {
    return (
      <div className="details-page">
        <h2>Project not found</h2>
        <Link to="/">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <Link to="/">Back to Projects</Link>
    </div>
  );
}

export default ProjectDetails;
