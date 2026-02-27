import { useState } from "react";
import { ShortenedLink } from "../../types";
import "./UrlShortener.css";

interface UrlShortenerProps {
    shorten: (longUrl: string, alias?: string) => Promise<void>;
    result: ShortenedLink | null;
    loading: boolean;
    error: string | null;
    onShortenSuccess?: (link: ShortenedLink) => void;
}

export const UrlShortener = ({ shorten, result, loading, error }: UrlShortenerProps) => {
    const [longUrl, setLongUrl] = useState("");
    const [alias, setAlias] = useState("");
    const [copied, setCopied] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await shorten(longUrl, alias);
        setLongUrl("");
        setAlias("");
    };

    const handleCopy = async () => {
        if (result?.shortUrl) {
            await navigator.clipboard.writeText(result.shortUrl);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <section className="shortener-section" id="shorten">
            <div className="shortener-card">
                <div className="shortener-header">
                    <h2>Shorten a URL</h2>
                    <p>Paste your long link and get a clean, trackable short URL instantly.</p>
                </div>

                <form className="shortener-form" onSubmit={handleSubmit}>
                    <div className="input-row">
                        <div className="input-group main-url">
                            <label htmlFor="long-url">Long URL</label>
                            <input
                                id="long-url"
                                type="url"
                                value={longUrl}
                                onChange={(e) => setLongUrl(e.target.value)}
                                placeholder="https://your-very-long-url.com/with-lots-of-paths"
                                required
                                disabled={loading}
                            />
                        </div>
                    </div>

                    <div className="input-row split">
                        <div className="input-group">
                            <label htmlFor="alias">
                                Custom alias <span className="optional">(optional)</span>
                            </label>
                            <div className="alias-input-wrap">
                                <span className="alias-prefix">scsr.io/</span>
                                <input
                                    id="alias"
                                    type="text"
                                    value={alias}
                                    onChange={(e) => setAlias(e.target.value.replace(/\s/g, ""))}
                                    placeholder="my-link"
                                    disabled={loading}
                                    maxLength={30}
                                />
                            </div>
                        </div>
                    </div>

                    {error && (
                        <div className="shortener-error">
                            <span>⚠</span> {error}
                        </div>
                    )}

                    <button type="submit" className="trim-btn" disabled={loading || !longUrl}>
                        {loading ? (
                            <span className="loading-dots">
                                <span /><span /><span />
                            </span>
                        ) : (
                            <>✂ Trim URL</>
                        )}
                    </button>

                    <p className="terms-note">
                        By clicking Trim URL, you agree to our{" "}
                        <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                    </p>
                </form>

                {result && (
                    <div className="result-card">
                        <div className="result-info">
                            <p className="result-label">Your shortened URL</p>
                            <a
                                href={result.shortUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="result-url"
                            >
                                {result.shortUrl}
                            </a>
                            <p className="result-original">
                                ↳ {result.longUrl.substring(0, 60)}{result.longUrl.length > 60 ? "…" : ""}
                            </p>
                        </div>
                        <div className="result-actions">
                            <button className="copy-btn" onClick={handleCopy}>
                                {copied ? "✓ Copied!" : "Copy"}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};


// Standalone version for Home page — manages its own hook instance
import { useUrlShortener } from "../../hooks/useUrlShortener";

export const UrlShortenerStandalone = () => {
    const { shorten, result, loading, error } = useUrlShortener();
    return <UrlShortener shorten={shorten} result={result} loading={loading} error={error} />;
};