import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthActions } from "../hooks/useAuthActions";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { handleSignUp, loading, error, clearMessages } = useAuthActions();
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) navigate("/dashboard", { replace: true });
    }, [user, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (password.length < 6) return;
        await handleSignUp(name, email, password);
    };

    const passwordStrength = password.length === 0
        ? null
        : password.length < 6
            ? "weak"
            : password.length < 10
                ? "fair"
                : "strong";

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="auth-logo">✂ scissors</Link>
                <h1>Create your account</h1>
                <p className="auth-sub">Free forever. No credit card required.</p>

                {error && (
                    <div className="auth-error">
                        <span className="auth-error-icon">⚠</span> {error}
                    </div>
                )}

                <form className="auth-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => { setName(e.target.value); clearMessages(); }}
                            required
                            disabled={loading}
                            autoComplete="name"
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value); clearMessages(); }}
                            required
                            disabled={loading}
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <div className="password-wrap">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="At least 6 characters"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); clearMessages(); }}
                                required
                                minLength={6}
                                disabled={loading}
                                autoComplete="new-password"
                            />
                            <button
                                type="button"
                                className="show-password"
                                onClick={() => setShowPassword(!showPassword)}
                                tabIndex={-1}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>

                        {passwordStrength && (
                            <div className="password-strength">
                                <div className={`strength-bar ${passwordStrength}`}>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <span className={`strength-label ${passwordStrength}`}>
                                    {passwordStrength === "weak" && "Too short"}
                                    {passwordStrength === "fair" && "Fair"}
                                    {passwordStrength === "strong" && "Strong"}
                                </span>
                            </div>
                        )}
                    </div>

                    <button type="submit" className="auth-submit" disabled={loading || password.length < 6}>
                        {loading ? <span className="btn-spinner" /> : "Create account"}
                    </button>
                </form>

                <p className="auth-switch">
                    Already have an account? <Link to="/login">Log in</Link>
                </p>
                <p className="auth-terms">
                    By signing up, you agree to our{" "}
                    <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </p>
            </div>
        </div>
    );
};