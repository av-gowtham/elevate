import discussion from "../assets/contact-discussion.jpg";
import "../about.css";

function About() {
  return (
    <section id="About-Us">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          Working closely with our clients to ensure that every detail is
          tailored to their unique style and vision
        </p>
        <button>
          <a href="#">Read more</a>
        </button>
      </div>

      <div className="about-us-info">
        <img src={discussion} alt="" />
        <div className="about-us-bottom">
          <div className="about-us-experience">
            <div>
              <h2>81+</h2>
              <p>Projects finished successfully</p>
            </div>
            <div>
              <h2>12+</h2>
              <p>Years of experience</p>
            </div>
            <div>
              <h2>40+</h2>
              <p>Talented team members</p>
            </div>
          </div>

          <div className="our-mission">
            <h3>Our Mission</h3>
            <p>
              To Elevate the standard of interior design by creating spaces that
              are not only beautiful but also functional and personalized. We
              strive to exceed our clients' expectations through exceptional
              service and unparalleled craftsmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
