import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServicesGrid({ items }) {
  return (
    <div className="grid-3">
      {items.map((service) => {
        const Icon = service.icon;
        return (
          <article key={service.title} className="card service-card">
            <div className="icon-box">
              <Icon size={20} />
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <div style={{ marginTop: 18 }}>
              <Link to="/contact" className="btn btn-secondary">
                Enquire now <ArrowRight size={16} />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}
