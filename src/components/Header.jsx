import "../header.css";

function Header() {
  console.log("nav close");
  return (
    <header id="Header">
      <div className="fade"></div>

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
    </header>
  );
}

export default Header;
