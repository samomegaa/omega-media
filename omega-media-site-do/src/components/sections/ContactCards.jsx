import React from "react";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { makeWhatsAppLink, siteConfig } from "../../config_site";

export default function ContactCards() {
  return (
    <div className="grid-2">
      <article className="card contact-card">
        <Phone size={20} />
        <h3>Phone</h3>
        <p>{siteConfig.phoneDisplay}</p>
      </article>

      <article className="card contact-card">
        <Mail size={20} />
        <h3>Email</h3>
        <p>{siteConfig.email}</p>
      </article>

      <article className="card contact-card">
        <MapPin size={20} />
        <h3>Location</h3>
        <p>{siteConfig.address}</p>
      </article>

      <article className="card contact-card">
        <MessageCircle size={20} />
        <h3>WhatsApp</h3>
        <p>
          <a href={makeWhatsAppLink()} target="_blank" rel="noreferrer">
            Start a chat now
          </a>
        </p>
      </article>
    </div>
  );
}
