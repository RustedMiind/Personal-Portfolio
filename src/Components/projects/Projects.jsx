import "./projects.css";
import data from "../../projects_data.json";
import ProjectCard from "./project_card/ProjectCard";
function Projects() {
  console.log(data);
  return (
    <div className="projects" id="projects">
      <div className="section-title">
        <h5>Projects</h5>
        <h3>Latest Works</h3>
      </div>

      <div className="cards-container">
        {data.map((cardData) => {
          return <ProjectCard cardData={cardData} />;
        })}
      </div>
    </div>
  );
}

export default Projects;
