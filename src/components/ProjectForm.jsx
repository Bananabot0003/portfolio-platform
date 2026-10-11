
import { useState } from "react";

function ProjectForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Make sure the fields are not empty
    if (title.trim() === "" || description.trim() === "") {
      alert("Please fill out both fields.");
      return;
    }

    onAdd(title.trim(), description.trim());

    // Clear the form after adding
    setTitle("");
    setDescription("");
  }

  return (
    <section className="form-section">
      <h2>Add Project</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter project title"
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          placeholder="Enter project description"
          rows="3"
        />

        <button type="submit">Add Project</button>
      </form>
    </section>
  );
}

export default ProjectForm;
