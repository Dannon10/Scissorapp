import "./Contact.css";

export const Contact = () => (
    <div className="contact-page">
        <div className="contact-header">
            <h1>Let's get in touch</h1>
            <p>Tell us about your use case and we'll get back to you within 24 hours.</p>
        </div>

        <div className="contact-card">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-row">
                    <div className="form-group">
                        <label>First Name</label>
                        <input type="text" placeholder="John" required />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" placeholder="Doe" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" placeholder="Acme Inc." required />
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input type="text" placeholder="Marketing Manager" required />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Business Email</label>
                        <input type="email" placeholder="you@company.com" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="+1 234 567 8900" />
                    </div>
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Company Size</label>
                        <select>
                            <option>1–10</option>
                            <option>11–50</option>
                            <option>51–200</option>
                            <option>200+</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Country</label>
                        <input type="text" placeholder="Nigeria" required />
                    </div>
                </div>

                <div className="form-group full">
                    <label>Primary Use Case</label>
                    <input type="text" placeholder="e.g. Marketing campaigns, QR menus…" required />
                </div>

                <p className="form-notice">
                    Scissors will only use your contact details to respond to your inquiry.
                    You can unsubscribe at any time. See our{" "}
                    <a href="#">Privacy Policy</a> for details.
                </p>

                <button type="submit" className="submit-btn">
                    Send Message →
                </button>
            </form>
        </div>
    </div>
);