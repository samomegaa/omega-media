import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";
import { makeWhatsAppLink, siteConfig } from "../config_site";

const landingWhatsApp = makeWhatsAppLink(
  "Hello Omega Media, I want to grow my business with better content."
);

export default function LandingPage() {
  return (
    <>
      <section className="hero" style={{ background: "radial-gradient(circle at top, rgba(200,162,74,0.14), transparent 35%), #0b0b0b" }}>
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">Growth-focused landing page for ads and WhatsApp conversion</span>
            <h1>Grow your business with high-quality content that attracts customers.</h1>
            <p>
              {siteConfig.companyName} helps businesses in Akure and beyond attract attention,
              build trust, and stay visible with professional photos, videos, and monthly content systems.
            </p>

            <div className="hero-actions">
              <a href={landingWhatsApp} className="btn btn-primary" target="_blank" rel="noreferrer">
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
              <Link to="/portfolio" className="btn btn-secondary">
                See Our Work <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid-3" style={{ marginTop: 24 }}>
              {[
                "Built for business owners",
                "Monthly content packages",
                "Fast WhatsApp-first booking",
              ].map((item) => (
                <div key={item} className="card" style={{ padding: 18 }}>
                  <p style={{ margin: 0, color: "#fff" }}>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <article className="card service-card featured">
            <span className="eyebrow">Limited slots available this week</span>
            <h3>What you get</h3>
            <div style={{ marginTop: 18 }}>
              {[
                "Professional business photos",
                "Short videos and reels for social media",
                "Content support built for visibility and growth",
                "A clear process from enquiry to delivery",
              ].map((point) => (
                <div key={point} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                  <CheckCircle2 size={16} />
                  <p style={{ margin: 0 }}>{point}</p>
                </div>
              ))}
            </div>
            <div className="card" style={{ padding: 18, marginTop: 18 }}>
              <p style={{ margin: 0, color: "var(--muted)" }}>Starting from</p>
              <p style={{ margin: "8px 0 0", fontSize: 28, fontWeight: 700, color: "#fff" }}>₦150,000 / month</p>
              <p style={{ marginTop: 10 }}>
                Best for businesses that want consistent, premium content instead of random one-off posts.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-title" style={{ textAlign: "center", marginInline: "auto" }}>
            <span className="eyebrow">The problem</span>
            <h2>Most businesses are not growing because they are not visible enough.</h2>
            <p>
              Poor visuals, inconsistent posting, and weak brand presentation can make even good businesses look forgettable.
            </p>
          </div>
          <div className="grid-3">
            {[
              "Low-quality photos reduce trust",
              "Inconsistent content kills visibility",
              "Weak brand presentation costs customers",
            ].map((item) => (
              <article key={item} className="card service-card" style={{ textAlign: "center" }}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="container grid-2">
          <article className="card service-card">
            <span className="eyebrow">The solution</span>
            <h3>Omega helps businesses stay visible with structured monthly content.</h3>
            {[
              "You tell us about your business",
              "We plan the kind of content you need",
              "We shoot photos and videos professionally",
              "You use them to attract more customers",
            ].map((step, idx) => (
              <div key={step} style={{ display: "flex", gap: 10, marginTop: idx === 0 ? 18 : 12 }}>
                <CheckCircle2 size={16} />
                <p style={{ margin: 0 }}>{step}</p>
              </div>
            ))}
          </article>

          <article className="card service-card">
            <span className="eyebrow">Who this is for</span>
            <h3>Built for serious businesses that want better presentation.</h3>
            <p>
              Restaurants, salons, fashion brands, schools, churches, real estate firms,
              event brands, and ambitious business owners who want stronger visibility and trust.
            </p>
            <div style={{ marginTop: 18 }}>
              <a href={landingWhatsApp} className="btn btn-primary" target="_blank" rel="noreferrer">
                Start on WhatsApp
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft section-border">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Proof</span>
            <h2>Use social proof before asking people to commit.</h2>
            <p>
              This section is where your strongest before-and-after results, client testimonials, and business case studies should sit.
            </p>
          </div>
          <div className="grid-3">
            {[
              {
                title: "Brand transformation",
                text: "Show how a business looked before and how Omega upgraded its visual presentation.",
              },
              {
                title: "Client testimonial",
                text: "Add a short, real quote from a satisfied business client in Akure or nearby.",
              },
              {
                title: "Content consistency",
                text: "Show a feed, campaign, or visual batch that proves Omega can deliver more than one-off work.",
              },
            ].map((item) => (
              <article key={item.title} className="card service-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-border">
        <div className="container">
          <article className="card service-card featured" style={{ textAlign: "center", padding: 36 }}>
            <span className="eyebrow">Ready to grow?</span>
            <h2 style={{ marginTop: 16, fontSize: "clamp(30px, 5vw, 48px)" }}>
              Let’s create content that makes your business impossible to ignore.
            </h2>
            <p style={{ maxWidth: 760, margin: "14px auto 0" }}>
              Send us a WhatsApp message and we’ll guide you on the best content package for your business.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center", marginTop: 24 }}>
              <a href={landingWhatsApp} className="btn btn-primary" target="_blank" rel="noreferrer">
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn btn-secondary">
                Book a Consultation
              </Link>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
