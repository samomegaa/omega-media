import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { makeWhatsAppLink } from "../../config_site";

export default function PageHero({
  eyebrow,
  title,
  text,
  primaryCta = "Book Consultation",
  secondaryCta = "Chat on WhatsApp"
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{text}</p>

        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            {primaryCta} <ArrowRight size={16} />
          </Link>
          <a
            href={makeWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <MessageCircle size={16} /> {secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
