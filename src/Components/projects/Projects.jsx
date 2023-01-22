import "./projects.css";
function Projects() {
  return (
    <div className="projects">
      <h5>Projects</h5>
      <h3>Latest Works</h3>
      <div className="cards-container">
        <div
          className="card"
          style={{
            backgroundImage: `url("https://cdn.discordapp.com/attachments/689278978716205163/880463102817230858/Crowdfund.JPG")`,
          }}
        >
          <div className="components">
            <div className="text-items">
              <h2>Project Name</h2>
              <p>Project about - Lorem ipsum dolor sit amet.</p>
              <a href="http://">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
