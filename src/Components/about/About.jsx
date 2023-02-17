import "./about.css";
import CV from "./Ali Soliman Resume.pdf";
function About() {
  return (
    <div className="about" id="about">
      <div className="section-title">
        <h5>About Me</h5>
        <h3>Hello, I'm Ali Soliman.</h3>
      </div>
      <div className="text-container">
        <p>
          I started to code for fun, And I ended up finding my passion in
          programming.
        </p>
        <div className="text-section">
          <h3>Education</h3>
          <p>
            <ul>
              <li>
                Faculty of Arts Oriental Languages Department.{" "}
                <span className="hashed">
                  {" "}
                  Helwan University | 2022 – 2026 (Estimated)
                </span>
              </li>
              <li>
                El Nahda Experimental Language School.{" "}
                <span className="hashed">
                  {" "}
                  Secondary Education | Cairo – Helwan | 2019 – 2022
                </span>
              </li>
            </ul>
          </p>
        </div>
        <div className="text-section">
          <h3>Core Skills</h3>
          <p>
            <ul>
              <li>
                React.js, React + TypeScript, React Redux, React-Router-DOM
              </li>
              <li>CSS, HTML, JavaScript, TypeScript</li>
              <li>AngularJS, Bootstrap, jQuery, SASS, Python</li>
            </ul>
          </p>
        </div>
        <div className="text-section">
          <h3>Location</h3>
          <p>
            Egypt - Cairo
            <span className="hashed">Helwan</span>
          </p>
        </div>
        <div className="text-section">
          <h3>Contact Options</h3>
          <p>
            E-mail
            <span className="hashed">alisolimanworks@gmail.com</span>
          </p>
          <p>
            Mobile
            <span className="hashed">
              <a href="tel:+201556449557">+20 155 6449 557</a>
              <a href="tel:+201095574449">+20 109 557 4449</a>
            </span>
          </p>
        </div>
        <div className="text-section">
          <h3>Curriculum Vitae</h3>
          <a href={CV} download>
            <p>Download CV</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
