import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useAuthActions } from "../../hooks/useAuthActions";
import "./Header.css";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { user } = useAuth();
    const { handleSignOut } = useAuthActions();

    const navItems = [
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQs", href: "/#faqs" },
        { label: "Contact", to: "/contact" },
    ];

    const onSignOut = async () => {
        await handleSignOut();
        setDropdownOpen(false);
        navigate("/");
    };

    // Get initials for avatar
    const getInitials = (name: string | null) => {
        if (!name) return "?";
        return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
    };

    return (
        <header className="header">
            <nav className="nav-inner">
                <Link to="/" className="logo">
                    <span className="logo-mark">✂</span>
                    <span className="logo-text">scissors</span>
                </Link>

                <div className={`nav-links ${menuOpen ? "open" : ""}`}>
                    {navItems.map((item) =>
                        item.to ? (
                            <Link
                                key={item.label}
                                to={item.to}
                                className={`nav-link ${location.pathname === item.to ? "active" : ""}`}
                                onClick={() => setMenuOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <a key={item.label} href={item.href} className="nav-link" onClick={() => setMenuOpen(false)}>
                                {item.label}
                            </a>
                        )
                    )}

                    <div className="nav-actions">
                        {user ? (
                            <>
                                <Link to="/dashboard" className="nav-link accent-link" onClick={() => setMenuOpen(false)}>
                                    My URLs
                                </Link>

                                {/* User avatar + dropdown */}
                                <div className="user-menu">
                                    <button
                                        className="user-avatar"
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        aria-label="User menu"
                                    >
                                        {getInitials(user.displayName)}
                                    </button>

                                    {dropdownOpen && (
                                        <>
                                            <div className="dropdown-backdrop" onClick={() => setDropdownOpen(false)} />
                                            <div className="user-dropdown">
                                                <div className="dropdown-user-info">
                                                    <span className="dropdown-name">{user.displayName || "User"}</span>
                                                    <span className="dropdown-email">{user.email}</span>
                                                </div>
                                                <hr className="dropdown-divider" />
                                                <Link to="/dashboard" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                                                    ↗ My Dashboard
                                                </Link>
                                                <button className="dropdown-item dropdown-signout" onClick={onSignOut}>
                                                    ← Sign out
                                                </button>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn-ghost">Log in</Link>
                                <Link to="/signup" className="btn-primary">Try for free</Link>
                            </>
                        )}
                    </div>
                </div>

                <button
                    className="hamburger"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={menuOpen ? "open" : ""} />
                    <span className={menuOpen ? "open" : ""} />
                    <span className={menuOpen ? "open" : ""} />
                </button>
            </nav>
        </header>
    );
};