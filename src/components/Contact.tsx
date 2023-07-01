import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <nav className="navlinks">
        <h4 className="scissor">
          <span className="stand">|</span> SCISSORS
        </h4>
        <a id="color-link" href="/">
          My URLs
        </a>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/Contact">Contact</a>
        <a href="/">FAQs</a>
        <Link id="color-link" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
};

const Cont = () => {
  return (
    <div className="contact-container">
      <h1>Lets's get in touch</h1>
      <div className="fieldset">
        <label> First Name</label>
        <input required type="text" />
        <label>Last Name </label>
        <input type="text" required />
        <label>Company Name </label>
        <input required type="text" />
        <label>Business Email Address</label>
        <input required type="email" />
        <label>Phone Number</label>
        <input required type="number" />
        <label>Job Title</label>
        <input required type="text" />
        <label>Company Size</label>
        <input required type="number" />
        <label>Primary Use Case</label>
        <input required type="text" />
        <label>Country</label>
        <input required type="text" />
        <div id="sci">
          <p>
            Scissor requires the contact information you provide in order to
            reach out to you regarding <br />
            our products and services. You have the option to unscuscribe from
            these communications <br />
            whenever you wish. To learn more about how to unscuscribe, our
            privacy practices and <br />
            and our dedication tosafeguarding your privacy, please refer to our
            privacy policy
          </p>
        </div>
        <button className="cont-bttn">Submit</button>
      </div>
    </div>
  );
};

const Foot = () => {
  return (
    <div>
      <div className="footer-container">
        <div className="footer-items">
          <header>
            <h3>Scissor</h3>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
            <a href="#" className="fa fa-instagram"></a>
            <a href="#" className="fa fa-linkedin"></a>
          </header>
        </div>
        <div className="footer-items">
          <ul>
            <p>Why Scissor?</p>
            <li>Scissor 101</li>
            <li>Integrations & API</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="footer-items">
          <ul>
            <p>Solutions</p>
            <li>Social Media</li>
            <li>Digital Marketing</li>
            <li>Customer Services</li>
            <li>For Developers</li>
          </ul>
        </div>
        <div className="footer-items">
          <ul>
            <p>Products</p>
            <li>Link Management</li>
            <li>QR Codes</li>
            <li>Link-in-bio</li>
          </ul>
        </div>
        <div className="footer-items">
          <ul>
            <p>Company</p>
            <li>About Scissor</li>
            <li>Careers</li>
            <li>Partners</li>
            <li>Press</li>
            <li>Contact</li>
            <li>Reviews</li>
          </ul>
        </div>
        <div className="footer-items"></div>
        <div className="footer-items">
          <ul>
            <p>Resources</p>
            <li>Blog</li>
            <li>Resource Library</li>
            <li>Developers</li>
            <li>App Connectors</li>
            <li>Support</li>
            <li>Trust Center </li>
            <li>Browser Extension</li>
            <li>Mobile App</li>
          </ul>
        </div>
        <div className="footer-items">
          <ul>
            <p>Features</p>
            <li>Branded Links</li>
            <li>Mobile Links</li>
            <li>Managers</li>
            <li>Campaign</li>
            <li>Management & Analytics </li>
            <li>QR Code generation</li>
          </ul>
        </div>
        <div className="footer-items">
          <ul>
            <p>Legal</p>
            <li>Privacy Policy</li>
            <li>Code Policy</li>
            <li>Terms of Service</li>
            <li>Acceptable Use Policy</li>
            <li>Code of Conduct</li>
          </ul>
        </div>
      </div>
      <p className="term">Term of Service | Security | Scissor 2023</p>
    </div>
  );
};

export const Contact = () => {
  return (
    <div>
      <Header />
      <Cont />
      <Foot />
    </div>
  );
};
