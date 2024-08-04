import logo from "../assets/logo.svg";
import hamburger from "../assets/hamburger.svg";
import "../header.css";

function Nav({ toggleNav, isValid }) {
  return (
    <nav>
      <div>
        <a href="#Header">
          <img src={logo} alt="Logo" />
        </a>
        <div className="hamburger" onClick={toggleNav}>
          <button>
            <img src={hamburger} alt="hamburger" />
          </button>
        </div>
        <div className={`list ${isValid ? " active" : ""}`}>
          <ul>
            <li>
              <a href="#Header" onClick={toggleNav}>
                Home
              </a>
            </li>
            <li>
              <a href="#About-Us" onClick={toggleNav}>
                About Us
              </a>
            </li>
            <li>
              <a href="#Services" onClick={toggleNav}>
                Services
              </a>
            </li>
            <li>
              <a href="#Projects" onClick={toggleNav}>
                Projects
              </a>
            </li>
          </ul>

          <a href="#Contact-Us" onClick={toggleNav}>
            <button>Contact Us</button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
