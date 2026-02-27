import { Link } from "react-router-dom";
import { Accordion } from "../components/ui/Accordion";
import { UrlShortenerStandalone } from "../components/features/UrlShortener";
import "./Home.css";

const Hero = () => (
    <section className="hero">
        <h1 className="hero-title">
            Optimize Your<br />
            <span className="hero-gradient">Online Presence</span><br />
            With Smarter Links
        </h1>
        <p className="hero-sub">
            Shorten URLs, create custom aliases, generate QR codes,<br />
            and track every click — all in one place.
        </p>
        <div className="hero-actions">
            <Link to="/signup" className="hero-cta">Start for free →</Link>
            <a href="#features" className="hero-ghost">See how it works</a>
        </div>
        <div className="hero-glow" />
    </section>
);

const Stats = () => {
    const items = [
        { value: "3M+", label: "Active users" },
        { value: "6M+", label: "Links created" },
        { value: "1B+", label: "Clicks tracked" },
        { value: "300k", label: "App integrations" },
    ];
    return (
        <section className="stats-strip">
            {items.map((s) => (
                <div key={s.label} className="stat-item">
                    <span className="stat-num">{s.value}</span>
                    <span className="stat-lbl">{s.label}</span>
                </div>
            ))}
        </section>
    );
};

const Features = () => {
    const features = [
        {
            icon: "✂",
            title: "URL Shortening",
            desc: "Transform long, clunky URLs into clean, shareable links instantly. Scale with confidence.",
        },
        {
            icon: "◈",
            title: "Custom Aliases",
            desc: "Branded short links that reinforce your identity. Set custom slugs that reflect your content.",
        },
        {
            icon: "▦",
            title: "QR Code Generation",
            desc: "Create stylized, downloadable QR codes for any URL. Print, share, embed — anywhere.",
        },
        {
            icon: "↗",
            title: "Click Analytics",
            desc: "See exactly how many times a link was clicked, when, and from where. Real data, clearly presented.",
        },
    ];

    return (
        <section className="features-section" id="features">
            <div className="section-label">
                <span className="section-pipe">|</span> Why Choose Scissors
            </div>
            <h2 className="section-title">
                Everything you need to<br />manage your links
            </h2>
            <div className="features-grid">
                {features.map((f) => (
                    <div key={f.title} className="feature-card">
                        <span className="feature-icon">{f.icon}</span>
                        <h3>{f.title}</h3>
                        <p>{f.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

const Pricing = () => {
    const plans = [
        {
            name: "Basic",
            price: "Free",
            tagline: "For individuals getting started",
            features: ["Unlimited URL shortening", "Basic analytics", "Customizable short links", "Standard support", "Ad-supported"],
            cta: "Get started",
            highlight: false,
        },
        {
            name: "Professional",
            price: "$15",
            period: "/mo",
            tagline: "Ideal for business creators",
            features: ["Enhanced analytics", "Custom branded domains", "Advanced customization", "Priority support", "Ad-free"],
            cta: "Start free trial",
            highlight: true,
        },
        {
            name: "Teams",
            price: "$25",
            period: "/mo",
            tagline: "Share with up to 10 users",
            features: ["Team collaboration", "User roles & permissions", "Enhanced security", "API access", "Dedicated account manager"],
            cta: "Contact sales",
            highlight: false,
        },
    ];

    return (
        <section className="pricing-section" id="pricing">
            <div className="section-label">
                <span className="section-pipe">|</span> Pricing
            </div>
            <h2 className="section-title">A price perfect for your needs</h2>
            <p className="section-sub">
                Whether for personal use, business, or a growing team — we've got you covered.
            </p>
            <div className="pricing-grid">
                {plans.map((plan) => (
                    <div key={plan.name} className={`pricing-card ${plan.highlight ? "highlighted" : ""}`}>
                        {plan.highlight && <span className="popular-badge">Most Popular</span>}
                        <div className="plan-header">
                            <h3>{plan.name}</h3>
                            <div className="plan-price">
                                <span className="price-val">{plan.price}</span>
                                {plan.period && <span className="price-period">{plan.period}</span>}
                            </div>
                            <p className="plan-tagline">{plan.tagline}</p>
                        </div>
                        <ul className="plan-features">
                            {plan.features.map((f) => (
                                <li key={f}><span className="check">✓</span> {f}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};

const faqItems = [
    { question: "How does URL shortening work?", answer: "URL shortening takes a long address and creates a compact redirect link. When clicked, it transparently redirects the visitor to the original destination using an HTTP 301 or 302 redirect." },
    { question: "Do I need an account?", answer: "Basic shortening doesn't require an account. An account unlocks custom aliases, click analytics, QR codes, and link history." },
    { question: "Are shortened links permanent?", answer: "Links created on paid plans persist indefinitely. Free plan links are also long-lived, but we recommend upgrading for business-critical URLs." },
    { question: "Is there a limit on how many URLs I can shorten?", answer: "Free plans allow unlimited shortening. Paid plans add custom domains, analytics, and other premium features." },
    { question: "Can I customize my shortened URLs?", answer: "Yes — on any plan you can set a custom alias (e.g. scsr.io/my-brand). Branded domains are available on Professional and Teams plans." },
    { question: "Can I track performance?", answer: "Yes. The dashboard shows total clicks per link, creation dates, and average engagement across your entire link history." },
    { question: "What is a QR code?", answer: "A QR code is a scannable image that encodes your URL. When scanned with any phone camera, it opens the link instantly — ideal for print, events, and physical marketing." },
    { question: "Is there an API?", answer: "Yes. API access is available on the Teams plan and lets you shorten links and retrieve analytics programmatically from any application." },
];

export const Home = () => (
    <div className="home">
        <Hero />
        <Stats />
        <Features />
        <UrlShortenerStandalone />
        <Pricing />
        <section className="faq-section" id="faqs">
            <div className="section-label">
                <span className="section-pipe">|</span> FAQs
            </div>
            <h2 className="section-title">Frequently asked questions</h2>
            <Accordion items={faqItems} />
        </section>
    </div>
);