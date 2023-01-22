import Logo from "../../img/white-logo.png";
import "./navbar.css";
function NavBar() {
  return (
    <nav>
      <div className="left-side">
        <img src={Logo} alt="RustedMind Logo" />
      </div>
      <div className="right-side">
        <ul>
          <li>Projects</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
