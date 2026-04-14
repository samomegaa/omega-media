import React from "react";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/layout/CTASection";
import SectionTitle from "../components/sections/SectionTitle";
import ServicesGrid from "../components/sections/ServicesGrid";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Six service divisions under one professional media brand."
        text="This page helps visitors understand exactly what Omega offers and how each division solves a different client need."
      />

      <section className="section section-border">
        <div className="container">
          <SectionTitle
            eyebrow="What we do"
            title="Services built for individuals, brands, organisations, and events"
            text="Separate service pages can later be added for deeper SEO and better conversions."
          />
          <ServicesGrid items={services} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
