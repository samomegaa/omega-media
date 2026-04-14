import React from "react";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import { makeWhatsAppLink } from "../../config_site";

export default function CTASection() {
  return (
    <section className="section section-border section-soft">
      <div className="container">
        <div className="card cta-panel">
          <span className="eyebrow">Ready to work with Omega?</span>
          <h2 className="cta-title">
            Let’s build media content that looks premium and performs well.
          </h2>
          <p className="cta-copy">
            Whether you need business content, event coverage, recording support,
            training, or selected rentals, we can structure a service around your goals.
          </p>

          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">
              Book a Consultation
            </Link>
            <a href={makeWhatsAppLink()} target="_blank" rel="noreferrer" className="btn btn-secondary">
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
