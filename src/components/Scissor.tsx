import { useState, useEffect } from "react";
// import { CopyToClipboard } from "react-copy-to-clipboard";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";

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
        <Link id="color-link" to="/Login">
          Log in
        </Link>
        <button className="bttn-try">Try for free</button>
      </nav>
    </div>
  );
};

const Main = () => {
  return (
    <div className="main">
      <h1>Optimize Your Online Experience with Our</h1>
      <h1>
        Advanced <span>URL Shortening</span> Solution
      </h1>
      <p>
        Personalize your shortened URLs to align with your brand identity
        Utilize custom slugs, <br />
        branded links, and domain customization options to reinforce your brand
        presence <br /> enhance user engagement
      </p>
      <section className="sect">
        <Link to="/Signup">
          <button className="signup-bttn">Sign up</button>{" "}
        </Link>
        <a href="/">Learn more</a>
      </section>
    </div>
  );
};

const Mid = () => {
  return (
    <div className="mid">
      <div className="mid-mid">
        <p>
          Seamlessly transform your long URLs into concise <br /> and shareable
          links with just few clicks
        </p>
      </div>
    </div>
  );
};

const Stop = () => {
  return (
    <div className="stop">
      <div className="stop-one">
        <h1>One Stop. </h1>
        <h1>3M</h1>
        <h1>6M</h1>
        <h1>1B</h1>
        <h1>300k</h1>
      </div>
      <div className="stop-two">
        <h1>
          <span>Four Posibilities</span>.
        </h1>
        <p>Active users</p>
        <p>Links & QR codes created</p>
        <p>Clicked and Scanned connections</p>
        <p>App Integrations</p>
      </div>
    </div>
  );
};
const Article = () => {
  return (
    <div className="article-container">
      <div className="article-content">
        <h1>
          <span className="stand">|</span> Why Choose<span> Scissors</span>
        </h1>
        <br />
        <p>
          Scissors is the hub of everything that has to do with your link
          management. We shorten your URLs, <br />
          allow you to create custom ones for your personal,
          <br />
          business, event usage. Our swift QR code
          <br />
          creation, management and usage tracking with
          <br />
          advance analytics for all of these is second to none.
        </p>
      </div>
      <div className="article-content">
        <h3>URL Shortening</h3>
        <p>
          Scissor allows you to shorten URLs of your <br />
          business. Shorten your URL at scale, <br />
          URL redirects
        </p>
      </div>
      <div className="article-content">
        <h3>Custom URLs</h3>
        <p>
          With Scissor you can create custo URL <br />
          with the length you want! A solution for socials, <br />
          and business
        </p>
      </div>
      <br />
      <div className="article-content">
        <h3>QR Codes</h3>
        <p>
          Generate QR codes to your business, events. <br />
          Bring your audience and customers to your <br />
          doorstep with this scan and go solution.
        </p>
      </div>
      <div className="article-content">
        <h3>Data Analytics</h3>
        <p>
          Receive data on the usage either your
          <br /> shortened URL, custom URLs or generated QR <br />
          codes. Embedded to monitor progress.
        </p>
      </div>
    </div>
  );
};

const Price = () => {
  return (
    <div className="price">
      <header className="price-head">
        <h1>
          <span className="stand">|</span> A <span> Price perfect </span> for
          your needs.
        </h1>
        <p>
          From catering to your personal, business, events, social needs you can
          be <br />
          rest assured we have you in mind in our pricing.
        </p>
      </header>
      <div className="price-container">
        <div className="prices-left">
          <ul>
            <h3>Basic</h3>
            <h1>Free</h1>
            <h3>Free plans for all users</h3>
            <li>Unlimited URL shortening</li>
            <li>Basic Link Analytics</li>
            <li>Customizable Short Links</li>
            <li>Standard Support</li>
            <li>Ad-supported</li>
          </ul>
        </div>
        <div className="prof">
          <ul>
            <h3>Professional</h3>
            <h1>$15/month</h1>
            <h3>Ideal for business creators</h3>
            <li>Enhanced Link Analytics</li>
            <li>Custom Branded Domains</li>
            <li>Advanced Link Customization</li>
            <li>Priority Support</li>
            <li>Ad-free Experience</li>
          </ul>
        </div>
        <div className="prices-right">
          <ul>
            <h3>Teams</h3>
            <h1>$25/month</h1>
            <h3>Share with up to 10 users</h3>
            <li>Team Collaboration</li>
            <li>User Role And Permisiion</li>
            <li>Enhanced Security</li>
            <li>API Access</li>
            <li>Dedicated Account Manager</li>
          </ul>
        </div>
      </div>
      <div className="price-bttn">
        <button id="cust">Get Custom Pricing</button>
        <button>Select Pricing</button>
      </div>
    </div>
  );
};

const Urlshortener = ({setInputValue}:{setInputValue:any}) => {
  const [value, setValue] = useState("");
  // const [form, setForm] = useState({
  //   longUrl: "",
  //   alias: ""
  // });

  // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>
  //   setForm((oldForm) => ({
  //     ...oldForm,
  //     [event.target.name]: event.target.value
  //   }));

    const handleClick = () => {
      console.log(value)
      setInputValue(value)
    setValue("");
  };

  return (
    <div className="form-container">
      <div className="url-form">
        <input
          id="url-id"
          value={value}
          name="longUrl"
          type="text"
          required
          onChange={(e) => setValue(e.target.value)}
          placeholder="Paste URL here..."
        />
        <div className="dom-alias">
          <label>Choose a domain name</label>
          <select>
            <option value=".com">.com</option>
            <option value=".org">.org</option>
            <option value=".edu">.edu</option>
            <option value=".gov">.gov</option>
          </select>
          <input
            type="text"
            placeholder="Type Alias here"
            // value={form.alias}
            // name="alias"
            // onChange={handleChange}
          />
        </div>
        <button id="trim-bttn" onClick={handleClick}>
          Trim URL
        </button>
        <Link to="/Qrcode">
          <button className="qr-bttn">Generate QR Code</button>{" "}
        </Link>
        <p>
          By clicking TrimURL, I agree to the{" "}
          <span className="bold-span">Terms of Service,</span> <br />{" "}
          <span className="bold-span"> Privacy Policy </span>and Use of Cookies.
        </p>
      </div>
    </div>
  );
};

const Linkresult = ({inputValue }:{inputValue:string}):any=> {
  console.log(inputValue);
  // const [link, setLink] = useState();
  const [shortenLink, setShortenLink] = useState("");
  // const [copied, setCopied] = useState(false);

  const fetchData = async () => {
    try {
      const res = await axios(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      setShortenLink(res.data.result.full_short_link);
    } catch (err) {
    } finally {
    }
  };
  useEffect(() => {
    if (inputValue.length) {
      fetchData();
    }
  }, [inputValue]);

  console.log(shortenLink);

  return (
    <>
      {shortenLink && (
        <div className="link-result">
          <h1>Shortened URL</h1>
          <p>{shortenLink}</p>
        </div>
      )}
    </>
  );
};

const Faq = () => {
  return (
    <div className="faq-container">
      <div className="faq-content">
        <h1>
          <span className="stand">|</span> FAQs
        </h1>
      </div>
      <div className="faq-content">
        <p>
          How does URL shortening work?
          <br />
          URL shortening works by taking a long URL and creating a shorter,
          condensed version that redirects to the <br />
          original URL. When a user clciks on the shortened link, they are
          redirected to the intended destination. +
        </p>
      </div>
      <hr />
      <div className="faq-content">
        <p>Is it necessary to create an account to use the URL shortening? +</p>
      </div>
      <hr />
      <div className="faq-content">
        <p>Are the shortened links permanent? will they expire? +</p>
      </div>
      <hr />
      <div className="faq-content">
        <p>Are there any limitations on the number of URLs I can shorten? +</p>
      </div>
      <hr />
      <div className="faq-content">
        <p>
          Can I customize the shortened URLs to reflect my brand or content? +
        </p>
      </div>
      <hr />
      <div className="faq-content">
        <p>Can I track the performance of my shortened URLs? +</p>
      </div>
      <hr />
      <div className="faq-content">
        <p>
          How secure is the URL shortening service? Are the shortened links
          protected against spam or malicious activity? +
        </p>
      </div>
      <hr />
      <div className="faq-content">
        <p>What is a QR code and what can it do? +</p>
      </div>
      <hr />
      <div className="faq-content">
        <p>
          Is there an API available for integrating the URL shortening service
          into my own applications or websites? +
        </p>
      </div>
      <hr />
    </div>
  );
};

const Foot = () => {
  return (
    <div>
      <footer className="foot">
        <header>
          <h1>Revolutionizing Link Optimization</h1>
        </header>
        <button>Get Started</button>
      </footer>
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

// const Analytics = ({
//   id,
//   // const [inputValue, setInputValue] = useState("");
//   createdAt,
//   name,
//   longURL,
//   shortcode,
//   totalClicks
// }) => {
//   return (
//     <>
//       <h3>created at {`${createdAt}`}</h3>
//       <h3>{name}</h3>
//       <h3>{longURL}</h3>
//       <h3>{window.location.host}</h3>
//       <button>Copy</button>
//       <h3>Total Clicks</h3>
//       <h3>{totalClicks}</h3>
//     </>
//   );
// };

// const dummyData = [
//   {
//     id: "3irr08ms0fan",
//     createdAt: new Date(),
//     name: "My website",
//     longURL: "https://google.com",
//     shortcode: "nasdo",
//     totalClicks: 313
//   }
// ];

export const Scissor = () => {
  // const [openModal, setOpenModal] = useState(false);
  // const [links, setLinks] = useState(dummyData);
  const [inputValue, setInputValue] = useState("");
  return (
    <div>
      <Header />
      <Main />
      <Mid />
      <Stop />
      <Article />
      <Price />
      <Urlshortener setInputValue={setInputValue} />
      <Linkresult inputValue={inputValue} />
      {/* {links.map((link) => ( */}
      {/* <Analytics key={link.id} {...link} /> */}
      {/* ))} */}
      <Faq />
      <Foot />
    </div>
  );
};
