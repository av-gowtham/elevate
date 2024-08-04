import "../contact.css";

function Contact() {
  return (
    <div id="Contact-Us">
      <div className="contact-text">
        <h2>Get in touch</h2>
        <p>We’d love to hear from you. Please fill out this form.</p>
      </div>
      <div className="contact-form">
        <form>
          <div className="form-fields">
            <div className="full-name">
              <div className="first-name">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  placeholder="Sanjay"
                  id="firstName"
                  name="First Name: "
                  required
                />
              </div>
              <div className="last-name">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  placeholder="Kumar"
                  id="lastName"
                  name="Last Name: "
                  required
                />
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="Email ID: "
                id="email"
                required
                placeholder="sanjaykumar@gmail.com"
              />
            </div>
            <div className="message">
              <label htmlFor="message">Message</label>
              <textarea
                name="Message: "
                id="message"
                required
                placeholder="Type here..."
              />
            </div>
            <div className="accept-policy">
              <input type="checkbox" id="checkbox" />
              <label htmlFor="checkbox">
                You agree to our <span>terms</span> &{" "}
                <span>privacy policy</span>.
              </label>
            </div>
          </div>
          <div className="submit">
            <button type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
