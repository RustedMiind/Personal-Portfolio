import "./footer.css";
import Logo from "./lighted_black_logo3.jpg";
import LogoHover from "./on_hover.jpg";
function Footer() {
  return (
    <footer>
      <div className="image-container">
        <img src={Logo} alt="RustedMind Logo" />
        <img
          src={LogoHover}
          className="on-hover"
          alt="RustedMind Logo"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        />
      </div>
      <div className="links-container nav-links">
        <ul>
          <li>
            <a target="_blank" href="https://www.facebook.com/Ra7ieM/">
              Facebook
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.linkedin.com/in/rustedmind/">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/RustedMiind">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/alisolimannn/">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
