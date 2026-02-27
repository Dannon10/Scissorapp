import { Link } from "react-router-dom";
import "./Footer.css";

const footerLinks = {
    "Why Scissors?": ["Scissors 101", "Integrations & API", "Pricing"],
    Solutions: ["Social Media", "Digital Marketing", "Customer Service", "For Developers"],
    Products: ["Link Management", "QR Codes", "Link-in-bio"],
    Company: ["About Scissors", "Careers", "Partners", "Press", "Contact"],
    Resources: ["Blog", "Developers", "Support", "Trust Center", "Mobile App"],
    Legal: ["Privacy Policy", "Terms of Service", "Acceptable Use", "Code of Conduct"],
};

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-cta">
                <h2>Revolutionizing Link Optimization</h2>
                <p>Start shortening, tracking, and sharing smarter today.</p>
                <Link to="/signup" className="footer-cta-btn">Get Started — It's Free</Link>
            </div>

            <div className="footer-grid">
                <div className="footer-brand">
                    <Link to="/" className="footer-logo">
                        <span>✂</span> scissors
                    </Link>
                    <p className="footer-tagline">Your complete link management platform.</p>
                    <div className="social-links">
                        {["facebook", "twitter", "instagram", "linkedin"].map((s) => (
                            <a key={s} href="#" className={`fa fa-${s}`} aria-label={s} />
                        ))}
                    </div>
                </div>

                {Object.entries(footerLinks).map(([heading, items]) => (
                    <div key={heading} className="footer-col">
                        <p className="footer-col-heading">{heading}</p>
                        <ul>
                            {items.map((item) => (
                                <li key={item}>
                                    <a href="#">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <span>© 2025 Scissors. All rights reserved.</span>
                <span>Terms of Service · Privacy · Security</span>
            </div>
        </footer>
    );
};