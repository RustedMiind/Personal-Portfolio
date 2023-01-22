function ProjectCard(props) {
  const { name, id, imageURL, link, describtion } = props.cardData;
  return (
    <div
      key={id}
      className={`card ${id / 2 === Math.floor(id / 2) ? "right" : "left"}`}
      style={{
        backgroundImage: `url("${imageURL}")`,
      }}
    >
      {/* <div className="number">{id}</div> */}
      <div className="components">
        <div className="text-items">
          <h2>{name}</h2>
          <p>{describtion}</p>
          <a className="button-main" target="_blank" href={link}>
            Explore
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
