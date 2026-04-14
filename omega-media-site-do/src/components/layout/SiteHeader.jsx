import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { navigation } from "../../data/navigation";
import { cn } from "../../utils/cn";
import { makeWhatsAppLink, siteConfig } from "../../config_site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-shell">
      <div className="container nav-inner">
        <Link to="/" className="brand-lockup">
          <img src="/omega-wordmark.svg" alt={siteConfig.companyName} className="brand-logo" />
        </Link>

        <nav className="nav-links">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) => cn("nav-link", isActive && "active")}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-cta nav-cta-group">
          <a
            href={makeWhatsAppLink("Hello Omega Media Communications, I would like to make an enquiry.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <Link to="/contact" className="btn btn-primary">
            Book Consultation
          </Link>
        </div>

        <button
          className="mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={cn("container mobile-menu", open && "open")}>
        {navigation.map((item) => (
          <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
            {item.label}
          </NavLink>
        ))}
        <div style={{ marginTop: 12, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a
            href={makeWhatsAppLink("Hello Omega Media Communications, I would like to make an enquiry.")}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            WhatsApp
          </a>
          <Link to="/contact" className="btn btn-primary" onClick={() => setOpen(false)}>
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
