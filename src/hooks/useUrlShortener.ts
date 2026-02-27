import { useState, useCallback } from "react";
import { shortenUrl, saveLinkToFirestore, getLinksFromFirestore } from "../services/urlService";
import { ShortenedLink } from "../types";

export const useUrlShortener = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [result, setResult] = useState<ShortenedLink | null>(null);
    const [history, setHistory] = useState<ShortenedLink[]>([]);
    const [historyLoading, setHistoryLoading] = useState(false);

    const shorten = useCallback(async (longUrl: string, alias?: string, userId?: string | null) => {
        if (!longUrl.trim()) return;
        setLoading(true);
        setError(null);
        setResult(null);
        try {
            const shortUrl = await shortenUrl(longUrl, alias);
            const saved = await saveLinkToFirestore(longUrl, shortUrl, alias || "", userId ?? null);
            setResult(saved);
            setHistory((prev) => [saved, ...prev]);
        } catch (err: any) {
            setError(err.message || "Something went wrong. Please try again.");
        } finally {
            setLoading(false);
        }
    }, []);

    const loadHistory = useCallback(async (userId: string | null) => {
        setHistoryLoading(true);
        setError(null);
        try {
            const links = await getLinksFromFirestore(userId);
            setHistory(links);
        } catch (err: any) {
            // Show the real Firestore error so it's easier to debug
            const message = err?.message || JSON.stringify(err);
            setError(`Failed to load links: ${message}`);
            console.error("loadHistory error:", err);
        } finally {
            setHistoryLoading(false);
        }
    }, []);

    return { shorten, loading, error, result, history, setHistory, historyLoading, loadHistory };
};