import "./Projects.scss";
//import projectList from "../..projects.json";
//import projects from "../../assets/projects.json";
import SingleProjectCard from "../SingleProjectCard/SingleProjectCard";
import { useState, useEffect } from "react";

function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(`/projects.json`)
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);
  return (
    <main className="projects">
      <h1 className="projects--title">Mes Projets</h1>
      <section className="projects--container">
        {projects.map((project) => (
          <SingleProjectCard project={project} key={project.id} />
        ))}
      </section>
    </main>
  );
}

export default Projects;
