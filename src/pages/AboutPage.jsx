import React from "react";
import { CheckCircle2 } from "lucide-react";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/layout/CTASection";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Omega"
        title="An established media company built for quality, consistency, and growth."
        text="Omega Media Communications Ltd combines photography, videography, studio production, event coverage, training, and selected equipment support under one growing media brand in Akure."
      />

      <section className="section section-border">
        <div className="container grid-2">
          <article className="card service-card">
            <h3>Who we are</h3>
            <p>
              Omega Media Communications Ltd is positioned as a multi-division
              media company serving individuals, brands, organisations, and event
              clients. The business already has staff, equipment, outside-event
              experience, and an operating base that can now be structured for larger growth.
            </p>
          </article>

          <article className="card service-card">
            <h3>Why clients choose Omega</h3>
            {[
              "Existing operational team and equipment",
              "Ability to cover both business and event clients",
              "Recording, photography, and training under one brand",
              "Potential to scale into retainers, academy, and rentals"
            ].map((point) => (
              <div key={point} style={{ display: "flex", gap: 10, marginBottom: 14 }}>
                <CheckCircle2 size={16} />
                <p style={{ margin: 0 }}>{point}</p>
              </div>
            ))}
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
