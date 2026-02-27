import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { Analytics } from "../components/features/Analytics";
import { UrlShortener } from "../components/features/UrlShortener";
import { QrGenerator } from "../components/features/QrGenerator";
import { useAuth } from "../context/AuthContext";
import { useUrlShortener } from "../hooks/useUrlShortener";
import "./Dashboard.css";

type Tab = "links" | "shorten" | "qr";

export const Dashboard = () => {
    const [tab, setTab] = useState<Tab>("links");
    const { user, loading: authLoading } = useAuth();
    const { history, setHistory, historyLoading, loadHistory, shorten, result, loading, error } = useUrlShortener();

    useEffect(() => {
        if (authLoading) return;
        loadHistory(user?.uid ?? null);
    }, [authLoading, user]);

    const shortenWithUser = useCallback(
        async (longUrl: string, alias?: string) => {
            await shorten(longUrl, alias, user?.uid ?? null);
        },
        [shorten, user]
    );

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>My Dashboard</h1>
                    <p>Manage your links, generate QR codes, and track performance.</p>
                </div>
                <Link to="/" className="back-home">← Back to home</Link>
            </div>

            <div className="dashboard-tabs">
                {(["links", "shorten", "qr"] as Tab[]).map((t) => (
                    <button
                        key={t}
                        className={`tab-btn ${tab === t ? "active" : ""}`}
                        onClick={() => setTab(t)}
                    >
                        {t === "links" && "↗ My Links"}
                        {t === "shorten" && "✂ Shorten URL"}
                        {t === "qr" && "◈ QR Code"}
                    </button>
                ))}
            </div>

            <div className="dashboard-content">
                <div style={{ display: tab === "links" ? "block" : "none" }}>
                    <Analytics
                        history={history}
                        setHistory={setHistory}
                        historyLoading={authLoading || historyLoading}
                    />
                </div>

                {tab === "shorten" && (
                    <UrlShortener
                        shorten={shortenWithUser}
                        result={result}
                        loading={loading}
                        error={error}
                    />
                )}

                {tab === "qr" && <QrGenerator />}
            </div>
        </div>
    );
};