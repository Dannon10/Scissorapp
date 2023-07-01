import QRCode from "qrcode.react";
import { useState } from "react";
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

const Qr = () => {
  const [url, setUrl] = useState("");

  const generateQRCode = (evt: React.FormEvent) => {
    evt.preventDefault();

    setUrl("");
  };

  const qrCode = (
    <QRCode
      id="qrCodeId"
      size={300}
      value={url}
      includeMargin
      bgColor="white"
      fgColor="black"
      level="Q"
    />
  );

  return (
    <div>
      <div className="qr-container">
        <h1>Generate QR Code Here</h1>
        <form onSubmit={generateQRCode}>
          <input
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste URL here..."
          />
          <button className="qr-bttn" type="submit">
            Generate QR Code
          </button>
        </form>
        <div>{qrCode}</div>
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

export const Qrcode = () => {
  return (
    <>
      <Header />
      <Qr />
      <Foot />
    </>
  );
};
