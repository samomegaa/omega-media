import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function PackagesGrid({ items }) {
  return (
    <div className="grid-3">
      {items.map((item) => (
        <article
          key={item.name}
          className={`card package-card ${item.featured ? "featured" : ""}`}
        >
          {item.featured && <span className="eyebrow">Recommended</span>}
          <h3>{item.name}</h3>
          <p style={{ color: "#fff", fontWeight: 600 }}>{item.price}</p>

          <ul className="package-points">
            {item.points.map((point) => (
              <li key={point}>
                <CheckCircle2 size={16} />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: 18 }}>
            <Link to="/contact" className="btn btn-primary">
              Request package
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}
