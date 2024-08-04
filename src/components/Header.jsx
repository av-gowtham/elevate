import logo from "../assets/Content-Left.svg";
import "../header.css";

function Header() {
  return (
    <div id="Header">
      <div className="fade"></div>

      <nav>
        <a href="#Header">
          <img src={logo} alt="Logo" />
        </a>
        <div>
          <ul>
            <li>
              <a href="#Header">Home</a>
            </li>
            <li>
              <a href="#About-Us">About Us</a>
            </li>
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
          </ul>

          <a href="#Contact-Us">
            <button>Contact Us</button>
          </a>
        </div>
      </nav>

      <div className="hero-text">
        <h1>Transforming Spaces with timeless Elegance and Style</h1>
        <p>
          Experience the art of interior design that reflects your unique
          personality and enhances your living spaces.
        </p>
        <div>
          <a href="#">
            <button className="hero-btn-1">Explore Design</button>
          </a>

          <a href="#">
            <button className="hero-btn-2">Get Quote</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
