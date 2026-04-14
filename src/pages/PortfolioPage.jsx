import React from "react";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/layout/CTASection";
import SectionTitle from "../components/sections/SectionTitle";
import PortfolioGrid from "../components/sections/PortfolioGrid";
import { portfolioItems } from "../data/portfolio";

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="A showcase of events, brand work, studio sessions, and production quality."
        text="As more material is gathered, this page can become a true project gallery with categories, testimonials, and short case studies."
      />

      <section className="section section-border">
        <div className="container">
          <SectionTitle
            eyebrow="Our work"
            title="Project categories that demonstrate quality and range"
            text="Replace placeholders with real Omega visuals as soon as possible."
          />
          <PortfolioGrid items={portfolioItems} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
