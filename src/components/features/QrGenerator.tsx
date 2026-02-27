import { useState, useRef } from "react";
import QRCode from "qrcode.react";
import "./QrGenerator.css";

export const QrGenerator = () => {
    const [url, setUrl] = useState("");
    const [submitted, setSubmitted] = useState("");
    const [fgColor, setFgColor] = useState("#5b6af8");
    const [bgColor, setBgColor] = useState("#ffffff");
    const qrRef = useRef<HTMLDivElement>(null);

    const handleGenerate = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(url);
    };

    const handleDownload = () => {
        const canvas = qrRef.current?.querySelector("canvas") as HTMLCanvasElement;
        if (!canvas) return;
        const link = document.createElement("a");
        link.download = "scissors-qr.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    };

    return (
        <section className="qr-section">
            <div className="qr-card">
                <div className="qr-left">
                    <h2>QR Code Generator</h2>
                    <p>Turn any URL into a scannable QR code. Customize colors and download instantly.</p>

                    <form onSubmit={handleGenerate} className="qr-form">
                        <div className="input-group">
                            <label>URL</label>
                            <input
                                type="url"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://your-url.com"
                                required
                            />
                        </div>

                        <div className="color-row">
                            <div className="color-pick">
                                <label>Foreground</label>
                                <div className="color-swatch-wrap">
                                    <input
                                        type="color"
                                        value={fgColor}
                                        onChange={(e) => setFgColor(e.target.value)}
                                    />
                                    <span>{fgColor}</span>
                                </div>
                            </div>
                            <div className="color-pick">
                                <label>Background</label>
                                <div className="color-swatch-wrap">
                                    <input
                                        type="color"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                    />
                                    <span>{bgColor}</span>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="generate-btn">
                            ◈ Generate QR Code
                        </button>
                    </form>
                </div>

                <div className="qr-right">
                    <div className="qr-preview" ref={qrRef}>
                        {submitted ? (
                            <>
                                <QRCode
                                    id="qrCodeId"
                                    size={220}
                                    value={submitted}
                                    includeMargin
                                    bgColor={bgColor}
                                    fgColor={fgColor}
                                    level="Q"
                                    renderAs="canvas"
                                />
                                <button className="download-btn" onClick={handleDownload}>
                                    ↓ Download PNG
                                </button>
                            </>
                        ) : (
                            <div className="qr-placeholder">
                                <div className="qr-placeholder-icon">◈</div>
                                <p>Your QR code will appear here</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};