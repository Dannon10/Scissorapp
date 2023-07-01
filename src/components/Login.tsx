import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      {/* <img src="" alt="scissor icon" /> */}
      <nav className="navlinks">
        <h4 className="scissor">
          <span className="stand">|</span> SCISSORS
        </h4>
        <a id="color-link" href="/">
          My URLs
        </a>
        <a href="/">Features</a>
        <a href="/">Pricing</a>
        <a href="/">Products</a>
        <a href="/">FAQs</a>
        <Link id="color-link" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
};

const Log = () => {
  const [form, setform] = useState({
    email: "",
    password: ""
  });
  return (
    <div className="login-container">
      <div className="login-form">
        <header className="login-head">
          <p>Log in with:</p>
          <div className="with">
            <a href="/">Google</a>
            <a href="/">Apple</a>
          </div>
          <div id="or">
            <p>or</p>
          </div>
        </header>
        <input type="text" placeholder="Email address or username" required />
        <input type="password" required placeholder="Password" />
        <p id="forgot">Forgot your password?</p>
        <button id="login-bttn">Log in </button>
        <p id="dont">
          Don't have an account? <Link to="/Signup">Sign up</Link>
        </p>
        <div id="by">
          <p>
            <span id="byy">
              By signing in to an account, you agree to <br />
              Scissor's
            </span>{" "}
            Terms of Service, Privacy Policy<span id="byy"> and </span>{" "}
            Acceptable Use Policy
          </p>
        </div>
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

export const Login = () => {
  return (
    <div>
      <Header />
      <Log />
      <Foot />
    </div>
  );
};
