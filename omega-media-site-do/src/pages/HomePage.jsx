import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { services } from "../data/services";
import { packageItems } from "../data/packages";
import { portfolioItems } from "../data/portfolio";
import StatCard from "../components/ui/StatCard";
import SectionTitle from "../components/sections/SectionTitle";
import ServicesGrid from "../components/sections/ServicesGrid";
import PackagesGrid from "../components/sections/PackagesGrid";
import PortfolioGrid from "../components/sections/PortfolioGrid";
import CTASection from "../components/layout/CTASection";
import { makeWhatsAppLink, siteConfig } from "../config_site";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="container hero-grid hero-grid-branded">
          <div>
            <span className="eyebrow">
              Premium content systems, event coverage, recording, training, and rentals
            </span>
            <h1>
              Media production for businesses, events, and creators — built on a real studio base in Akure.
            </h1>
            <p>
              {siteConfig.companyName} helps brands and organisations stand out with business content creation,
              event coverage, studio photography, recording services, training, and selected equipment support.
            </p>

            <div className="hero-actions">
              <Link to="/contact" className="btn btn-primary">
                Book a Consultation <ArrowRight size={16} />
              </Link>
              <a href={makeWhatsAppLink()} className="btn btn-secondary" target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>

            <div className="grid-4 stats-grid" style={{ marginTop: 24 }}>
              <StatCard value="8+" label="Core Team" />
              <StatCard value="4" label="Cameras" />
              <StatCard value="6" label="Service Divisions" />
              <StatCard value="Akure" label="Operating Base" />
            </div>
          </div>

          <div className="hero-visual-stack">
            <article className="card-soft hero-image-card large">
              <img src="/omega-studio-interior.jpg" alt="Omega studio interior" />
            </article>
            <article className="card-soft hero-image-card small">
              <img src="/omega-studio-house.jpg" alt="Omega studio house exterior" />
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <SectionTitle
            eyebrow="Services"
            title="Structured around revenue-generating divisions"
            text="The new Omega site presents the company as a complete media business rather than a single-service studio, making it easier to sell retainers, events, training, and rentals from one brand."
          />
          <ServicesGrid items={services} />
        </div>
      </section>

      <section className="section section-border">
        <div className="container">
          <SectionTitle
            eyebrow="Business content"
            title="Built to attract monthly retainer clients"
            text="This section speaks directly to business owners who need consistency, stronger brand presentation, and better visibility online."
          />

          <div className="grid-2">
            <article className="card service-card">
              <h3>Grow your business with structured content creation</h3>
              <p>
                Many businesses struggle with inconsistent visuals and weak online presence. Omega solves that with recurring photo and video production designed for social media, campaigns, promotions, and brand growth.
              </p>
              <div style={{ marginTop: 18 }}>
                <Link to="/packages" className="btn btn-primary">
                  View Business Packages
                </Link>
              </div>
            </article>

            <article className="card service-card">
              {[
                "Monthly content creation plans",
                "Photos and short-form videos",
                "Suitable for restaurants, fashion, schools, salons, real estate, and churches",
                "Designed for repeat visibility and stronger trust",
              ].map((point) => (
                <div key={point} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                  <CheckCircle2 size={16} />
                  <p style={{ margin: 0 }}>{point}</p>
                </div>
              ))}
            </article>
          </div>
        </div>
      </section>

      <section className="section section-soft section-border">
        <div className="container">
          <SectionTitle
            eyebrow="Portfolio"
            title="Public Omega visuals already integrated"
            text="The site now uses public imagery from Omega's existing web presence to replace generic placeholders. As more project galleries become available, these can be swapped in immediately."
          />
          <PortfolioGrid items={portfolioItems.slice(0, 3)} />
        </div>
      </section>

      <section className="section section-border">
        <div className="container">
          <SectionTitle
            eyebrow="Packages"
            title="Clear starting prices help qualify serious leads"
            text="The website presents straightforward entry points while still leaving room for custom quotes and larger commercial proposals."
          />
          <PackagesGrid items={packageItems} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
