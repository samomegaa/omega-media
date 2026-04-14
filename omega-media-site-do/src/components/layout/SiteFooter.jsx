import React from "react";
import { navigation } from "../../data/navigation";
import { makeWhatsAppLink, siteConfig } from "../../config_site";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <img src="/omega-wordmark.svg" alt={siteConfig.companyName} className="footer-logo" />
          <p>
            A premium media and content company serving businesses, events,
            creators, and organisations through photography, videography,
            recording, training, and selected production support.
          </p>
        </div>

        <div>
          <h4>Pages</h4>
          <ul className="list-clean">
            {navigation.map((item) => (
              <li key={item.to}>{item.label}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="list-clean">
            <li>{siteConfig.address}</li>
            <li>{siteConfig.email}</li>
            <li>{siteConfig.phoneDisplay}</li>
            <li>
              <a href={makeWhatsAppLink()} target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
