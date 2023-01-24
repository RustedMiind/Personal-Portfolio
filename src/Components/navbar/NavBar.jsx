import Logo from "../../img/white-logo.png";
import "./navbar.css";
function NavBar() {
  return (
    <nav>
      <div className="left-side">
        <img id="start-effect" src={Logo} alt="RustedMind Logo" />
      </div>
      <div className="right-side nav-links">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          {/* <li>
            <a href="">Contact</a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
