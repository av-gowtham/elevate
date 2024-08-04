import field1 from "../assets/field-1.jpg";
import field2 from "../assets/field-2.jpg";
import field3 from "../assets/field-3.jpg";
import "../services.css";

function Services() {
  return (
    <section id="Services">
      <div className="our-services">
        <h3>Our Services</h3>
        <p>
          Experience the art of interior design that reflects your unique
          personality and enhances your living spaces.
        </p>
        <button>
          <a href="#">Read more</a>
        </button>
      </div>

      <div className="fields">
        <div className="field">
          <div className="field-fade"></div>
          <img src={field1} alt="Residential Design" />
          <div className="field-text">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 9.99997C2.99993 9.70904 3.06333 9.42159 3.18579 9.15768C3.30824 8.89378 3.4868 8.65976 3.709 8.47197L10.709 2.47297C11.07 2.16788 11.5274 2.00049 12 2.00049C12.4726 2.00049 12.93 2.16788 13.291 2.47297L20.291 8.47197C20.5132 8.65976 20.6918 8.89378 20.8142 9.15768C20.9367 9.42159 21.0001 9.70904 21 9.99997V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V9.99997Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Residential Design</p>
          </div>
        </div>

        <div className="field">
          <div className="field-fade"></div>
          <img src={field2} alt="Commercial Design" />
          <div className="field-text">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 2H6.33325C5.22868 2 4.33325 2.89543 4.33325 4V20C4.33325 21.1046 5.22868 22 6.33325 22H18.3333C19.4378 22 20.3333 21.1046 20.3333 20V4C20.3333 2.89543 19.4378 2 18.3333 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.33325 22V18H15.3333V22"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33325 6H8.34325"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3333 6H16.3433"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.3333 6H12.3433"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.3333 10H12.3433"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.3333 14H12.3433"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3333 10H16.3433"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3333 14H16.3433"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33325 10H8.34325"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.33325 14H8.34325"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Commercial Design</p>
          </div>
        </div>

        <div className="field">
          <div className="field-fade"></div>
          <img src={field3} alt="Design Consultation" />
          <div className="field-text">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.6665 11H6.6665C7.19694 11 7.70564 11.2107 8.08072 11.5858C8.45579 11.9609 8.6665 12.4696 8.6665 13V16C8.6665 16.5304 8.45579 17.0391 8.08072 17.4142C7.70564 17.7893 7.19694 18 6.6665 18H5.6665C5.13607 18 4.62736 17.7893 4.25229 17.4142C3.87722 17.0391 3.6665 16.5304 3.6665 16V11ZM3.6665 11C3.6665 9.8181 3.8993 8.64778 4.35159 7.55585C4.80388 6.46392 5.46682 5.47177 6.30254 4.63604C7.13827 3.80031 8.13042 3.13738 9.22235 2.68508C10.3143 2.23279 11.4846 2 12.6665 2C13.8484 2 15.0187 2.23279 16.1107 2.68508C17.2026 3.13738 18.1947 3.80031 19.0305 4.63604C19.8662 5.47177 20.5291 6.46392 20.9814 7.55585C21.4337 8.64778 21.6665 9.8181 21.6665 11M21.6665 11V16C21.6665 16.5304 21.4558 17.0391 21.0807 17.4142C20.7056 17.7893 20.1969 18 19.6665 18H18.6665C18.1361 18 17.6274 17.7893 17.2523 17.4142C16.8772 17.0391 16.6665 16.5304 16.6665 16V13C16.6665 12.4696 16.8772 11.9609 17.2523 11.5858C17.6274 11.2107 18.1361 11 18.6665 11H21.6665Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21.6665 16V18C21.6665 19.0609 21.2451 20.0783 20.4949 20.8284C19.7448 21.5786 18.7274 22 17.6665 22H12.6665"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>Design Consultation</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
