
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";
import SearchBar from "./components/SearchBar";
import ProjectDetails from "./pages/ProjectDetails";
import "./App.css";

function App() {
  // Starting projects
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "My first personal website built using HTML and CSS." },
    { id: 2, title: "Trivia Game", description: "A JavaScript trivia game with questions and answers." },
    { id: 3, title: "Task Manager", description: "A simple application for keeping track of daily tasks." }
  ]);

  const [search, setSearch] = useState("");

  // Add a new project
  function addProject(title, description) {
    const newProject = {
      id: Date.now(),
      title: title,
      description: description
    };

    setProjects([...projects, newProject]);
  }

  // Search through the projects
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header>
        <h1>Personal Project Showcase App</h1>
        <p>A collection of projects I have worked on.</p>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <ProjectForm onAdd={addProject} />

              <section className="project-section">
                <SearchBar search={search} setSearch={setSearch} />
                <ProjectList projects={filteredProjects} />
              </section>
            </main>
          }
        />

        <Route
          path="/project/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>

      <footer>
        <p>Made with React | My Project Portfolio</p>
      </footer>
    </div>
  );
}

export default App;
