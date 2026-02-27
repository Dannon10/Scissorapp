import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthActions } from "../hooks/useAuthActions";
import "./Auth.css";

export const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const { handleResetPassword, loading, error, success, clearMessages } = useAuthActions();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await handleResetPassword(email);
        if (!error) setSent(true);
    };

    return (
        <div className="auth-page">
            <div className="auth-card">
                <Link to="/" className="auth-logo">✂ scissors</Link>

                {sent && success ? (
                    <div className="reset-success">
                        <div className="reset-icon">✉</div>
                        <h1>Check your inbox</h1>
                        <p>
                            We sent a password reset link to <strong>{email}</strong>.
                            Check your spam folder if you don't see it.
                        </p>
                        <Link to="/login" className="auth-submit back-to-login">
                            Back to log in
                        </Link>
                    </div>
                ) : (
                    <>
                        <h1>Reset your password</h1>
                        <p className="auth-sub">
                            Enter your email and we'll send you a reset link.
                        </p>

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

                            <button type="submit" className="auth-submit" disabled={loading || !email}>
                                {loading ? <span className="btn-spinner" /> : "Send reset link"}
                            </button>
                        </form>

                        <p className="auth-switch">
                            Remember it? <Link to="/login">Back to log in</Link>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
};