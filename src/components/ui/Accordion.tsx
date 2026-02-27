import { useState } from "react";
import "./Accordion.css";

type Item = {
    question: string;
    answer: string;
};

export const Accordion = ({ items }: { items: Item[] }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? null : i));

    return (
        <div className="accordion">
            {items.map((item, i) => (
                <div key={i} className={`accordion-item ${openIndex === i ? "open" : ""}`}>
                    <button
                        className="accordion-trigger"
                        onClick={() => toggle(i)}
                        aria-expanded={openIndex === i}
                    >
                        <span className="accordion-question">{item.question}</span>
                        <span className="accordion-icon">{openIndex === i ? "−" : "+"}</span>
                    </button>
                    <div
                        className="accordion-body"
                        style={{ maxHeight: openIndex === i ? "400px" : "0px" }}
                        aria-hidden={openIndex !== i}
                    >
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};