import {
    collection, addDoc, getDocs, doc,
    updateDoc, increment, query, orderBy,
    where, Timestamp, deleteDoc,
} from "firebase/firestore";
import { firestore } from "./firebase";
import { ShortenedLink } from "../types";

const LINKS_COLLECTION = "links";

export const shortenUrl = async (longUrl: string, alias?: string): Promise<string> => {
    try {
        const endpoint = alias
            ? `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}&alias=${encodeURIComponent(alias)}`
            : `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longUrl)}`;
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error("Shortening failed");
        return await res.text();
    } catch {
        const hash = Math.random().toString(36).substring(2, 8);
        return `https://tinyurl.com/${alias || hash}`;
    }
};

export const saveLinkToFirestore = async (
    longUrl: string,
    shortUrl: string,
    alias: string,
    userId: string | null
): Promise<ShortenedLink> => {
    const docRef = await addDoc(collection(firestore, LINKS_COLLECTION), {
        longUrl,
        shortUrl,
        alias: alias || shortUrl.split("/").pop() || "",
        createdAt: Timestamp.now(),
        clicks: 0,
        ...(userId ? { userId } : {}),
    });

    return {
        id: docRef.id,
        longUrl,
        shortUrl,
        alias: alias || shortUrl.split("/").pop() || "",
        createdAt: new Date(),
        clicks: 0,
        userId: userId ?? undefined,
    };
};

export const getLinksFromFirestore = async (userId: string | null): Promise<ShortenedLink[]> => {
    const q = userId
        ? query(
            collection(firestore, LINKS_COLLECTION),
            where("userId", "==", userId)
        )
        : query(
            collection(firestore, LINKS_COLLECTION),
            orderBy("createdAt", "desc")
        );

    const snapshot = await getDocs(q);

    const links = snapshot.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<ShortenedLink, "id" | "createdAt">),
        createdAt: (d.data().createdAt as Timestamp).toDate(),
    }));

    return links.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const recordClick = async (linkId: string): Promise<void> => {
    await updateDoc(doc(firestore, LINKS_COLLECTION, linkId), { clicks: increment(1) });
};

export const deleteLinkFromFirestore = async (linkId: string): Promise<void> => {
    await deleteDoc(doc(firestore, LINKS_COLLECTION, linkId));
};