import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthActions } from "../hooks/useAuthActions";
import { useAuth } from "../context/AuthContext";
import "./Auth.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const { handleSignIn, loading, error, clearMessages } = useAuthActions();
    const { user } = useAuth();
    const navigate = useNavigate();

    // Redirect if already logged in
    useEffect(() => {
        if (user) navigate("/dashboard", { replace: true });
    }, [user, navigate]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleSignIn(email, password);
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="auth-logo">✂ scissors</Link>
                <h1>Welcome back</h1>
                <p className="auth-sub">Log in to manage your links and analytics.</p>

                {error && (
                    <div className="auth-error">
                        <span className="auth-error-icon">⚠</span> {error}
                    </div>
                )}

                <form className="auth-form" onSubmit={handleSubmit}>
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
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => { setPassword(e.target.value); clearMessages(); }}
                                required
                                disabled={loading}
                                autoComplete="current-password"
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
                    </div>

                    <Link to="/forgot-password" className="forgot-link">
                        Forgot your password?
                    </Link>

                    <button type="submit" className="auth-submit" disabled={loading}>
                        {loading ? (
                            <span className="btn-spinner" />
                        ) : (
                            "Log in"
                        )}
                    </button>
                </form>

                <p className="auth-switch">
                    Don't have an account? <Link to="/signup">Sign up free</Link>
                </p>
            </div>
        </div>
    );
};