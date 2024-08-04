import "../projects.css";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1,
  // };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1400, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1080, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="Projects">
      <div className="projects-text">
        <h2>Captivating Moments</h2>
        <p>Explore our stunning collection of beautifully designed spaces.</p>
        <a href="#">
          <button>View Gallery</button>
        </a>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={gallery1} alt="Gallery image 1" />
          </div>
          <div>
            <img src={gallery2} alt="Gallery image 2" />
          </div>
          <div>
            <img src={gallery3} alt="Gallery image 3" />
          </div>
          <div>
            <img src={gallery4} alt="Gallery image 4" />
          </div>
          <div>
            <img src={gallery5} alt="Gallery image 5" />
          </div>
          <div>
            <img src={gallery1} alt="Gallery image 1" />
          </div>
          <div>
            <img src={gallery2} alt="Gallery image 2" />
          </div>
          <div>
            <img src={gallery3} alt="Gallery image 3" />
          </div>
          <div>
            <img src={gallery4} alt="Gallery image 4" />
          </div>
          <div>
            <img src={gallery5} alt="Gallery image 5" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
