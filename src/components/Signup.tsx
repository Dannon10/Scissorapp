import { useState } from "react";
import { auth } from "../firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
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
        <a href="/">Products</a>
        <a href="/">FAQs</a>
        <Link id="color-link" to="/">
          Home
        </Link>
      </nav>
    </div>
  );
};

const Sign = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // const handleChange = (event) =>
  //   setForm((oldForm) => ({
  //     ...oldForm,
  //     [event.target.name]: event.target.value
  //   }));

  // // const handleSignup = async () => {
  //   await auth.createUserWithEmailAndPassword(
  //     form.username,
  //     form.email,
  //     form.password,
  //     form.confirmPassword
  //   );
  // };

  console.log(auth.currentUser);

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-head">
          <p>Sign up with:</p>
          <div className="with">
            <a href="/">Google</a>
            <a href="/">Apple</a>
          </div>
        </div>
        <p>or</p>
        <input
          value={form.username}
          name="username"
          // onChange={handleChange}
          type="text"
          placeholder="Username"
          required
        />
        <input
          value={form.email}
          name="email"
          // onChange={handleChange}
          type="email"
          placeholder="Email address"
          required
        />
        <input
          value={form.password}
          name="password"
          // onChange={handleChange}
          type="password"
          required
          placeholder="Password"
        />
        <input
          value={form.confirmPassword}
          name="confirmPassword"
          // onChange={handleChange}
          required
          type="password"
          placeholder="Retype Password"
        />
        <span id="byy">
          <p>
            6 or more chararcters, one number, one uppercase & one lowercase
          </p>
        </span>
        <button id="login-bttn">
          Sign up with Email
        </button>
        <p>
          Already have an account? <Link to="/Login">Log in</Link>
        </p>
        <p>
          <span id="byy">
            By signing in to an account, you agree to <br /> Scissor's{" "}
          </span>{" "}
          Terms of Service, Privacy Policy and Acceptable Use Policy
        </p>
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

export const Signup = () => {
  return (
    <div>
      <Header />
      <Sign />
      <Foot />
    </div>
  );
};
