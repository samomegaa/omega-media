import React from "react";

export default function PortfolioGrid({ items }) {
  return (
    <div className="grid-3">
      {items.map((item) => (
        <article key={item.title} className="card portfolio-card" style={{ padding: 0 }}>
          <div className="portfolio-thumb image-thumb">
            <img src={item.image} alt={item.alt || item.title} />
          </div>
          <div style={{ padding: 24 }}>
            <span className="eyebrow">{item.tag}</span>
            <h3>{item.title}</h3>
            <p>{item.summary}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
