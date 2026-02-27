import { useState } from "react";
import { recordClick, deleteLinkFromFirestore } from "../../services/urlService";
import { ShortenedLink } from "../../types";
import "./Analytics.css";

// Bar chart 
const ClicksChart = ({ links }: { links: ShortenedLink[] }) => {
    if (links.length === 0) return null;

    const today = new Date();
    const days = Array.from({ length: 7 }, (_, i) => {
        const d = new Date(today);
        d.setDate(today.getDate() - (6 - i));
        return {
            label: d.toLocaleDateString("en-GB", { weekday: "short" }),
            date: d.toDateString(),
            clicks: 0,
        };
    });

    links.forEach((link) => {
        const created = new Date(link.createdAt).toDateString();
        const day = days.find((d) => d.date === created);
        if (day) day.clicks += link.clicks || 0;
    });

    const max = Math.max(...days.map((d) => d.clicks), 1);

    return (
        <div className="chart-container">
            <p className="chart-title">Clicks by day (last 7 days)</p>
            <div className="chart-bars">
                {days.map((day) => (
                    <div key={day.label} className="chart-col">
                        <span className="chart-value">{day.clicks > 0 ? day.clicks : ""}</span>
                        <div className="chart-bar-wrap">
                            <div
                                className="chart-bar"
                                style={{ height: `${Math.max((day.clicks / max) * 100, day.clicks > 0 ? 8 : 2)}%` }}
                            />
                        </div>
                        <span className="chart-label">{day.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Delete modal
const DeleteModal = ({ link, onConfirm, onCancel }: {
    link: ShortenedLink; onConfirm: () => void; onCancel: () => void;
}) => (
    <div className="modal-backdrop" onClick={onCancel}>
        <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">🗑</div>
            <h3>Delete this link?</h3>
            <p>
                <strong>{link.shortUrl.replace("https://", "")}</strong> will be
                permanently deleted and can't be recovered.
            </p>
            <div className="modal-actions">
                <button className="modal-cancel" onClick={onCancel}>Cancel</button>
                <button className="modal-confirm" onClick={onConfirm}>Yes, delete</button>
            </div>
        </div>
    </div>
);

// Props
interface AnalyticsProps {
    history: ShortenedLink[];
    setHistory: React.Dispatch<React.SetStateAction<ShortenedLink[]>>;
    historyLoading: boolean;
}

// Main component
export const Analytics = ({ history, setHistory, historyLoading }: AnalyticsProps) => {
    const [copied, setCopied] = useState<string | null>(null);
    const [deleteTarget, setDeleteTarget] = useState<ShortenedLink | null>(null);
    const [deleting, setDeleting] = useState<string | null>(null);

    const handleCopy = async (link: ShortenedLink) => {
        await navigator.clipboard.writeText(link.shortUrl);
        await recordClick(link.id);
        setCopied(link.id);
        setTimeout(() => setCopied(null), 2000);
    };

    const handleDelete = async () => {
        if (!deleteTarget) return;
        setDeleting(deleteTarget.id);
        try {
            await deleteLinkFromFirestore(deleteTarget.id);
            setHistory((prev) => prev.filter((l) => l.id !== deleteTarget.id));
        } finally {
            setDeleting(null);
            setDeleteTarget(null);
        }
    };

    const totalClicks = history.reduce((sum, l) => sum + (l.clicks || 0), 0);

    if (historyLoading) {
        return (
            <div className="analytics-loading">
                <div className="spinner" />
                <p>Loading your links…</p>
            </div>
        );
    }

    return (
        <div className="analytics">
            <div className="analytics-stats">
                <div className="stat-card">
                    <span className="stat-value">{history.length}</span>
                    <span className="stat-label">Total Links</span>
                </div>
                <div className="stat-card">
                    <span className="stat-value">{totalClicks}</span>
                    <span className="stat-label">Total Clicks</span>
                </div>
                <div className="stat-card">
                    <span className="stat-value">
                        {history.length ? Math.round(totalClicks / history.length) : 0}
                    </span>
                    <span className="stat-label">Avg. Clicks / Link</span>
                </div>
            </div>

            {history.length > 0 && <ClicksChart links={history} />}

            {history.length === 0 ? (
                <div className="analytics-empty">
                    <p>✂</p>
                    <h3>No links yet</h3>
                    <p>Shorten your first URL to see it tracked here.</p>
                </div>
            ) : (
                <div className="links-table">
                    <div className="table-header">
                        <span>Short URL</span>
                        <span>Original</span>
                        <span>Created</span>
                        <span>Clicks</span>
                        <span></span>
                    </div>
                    {history.map((link) => (
                        <div key={link.id} className={`table-row ${deleting === link.id ? "row-deleting" : ""}`}>
                            <a href={link.shortUrl} target="_blank" rel="noopener noreferrer" className="link-short">
                                {link.shortUrl.replace("https://", "")}
                            </a>
                            <span className="link-original" title={link.longUrl}>
                                {link.longUrl.replace(/^https?:\/\//, "").substring(0, 40)}
                                {link.longUrl.length > 50 ? "…" : ""}
                            </span>
                            <span className="link-date">
                                {new Date(link.createdAt).toLocaleDateString("en-GB", {
                                    day: "numeric", month: "short", year: "numeric",
                                })}
                            </span>
                            <span className="link-clicks">
                                <span className="clicks-badge">{link.clicks ?? 0}</span>
                            </span>
                            <div className="row-actions">
                                <button className="row-copy-btn" onClick={() => handleCopy(link)}>
                                    {copied === link.id ? "✓" : "Copy"}
                                </button>
                                <button
                                    className="row-delete-btn"
                                    onClick={() => setDeleteTarget(link)}
                                    title="Delete link"
                                    disabled={deleting === link.id}
                                >
                                    🗑
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {deleteTarget && (
                <DeleteModal
                    link={deleteTarget}
                    onConfirm={handleDelete}
                    onCancel={() => setDeleteTarget(null)}
                />
            )}
        </div>
    );
};