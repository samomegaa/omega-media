import React from "react";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/layout/CTASection";
import SectionTitle from "../components/sections/SectionTitle";
import PackagesGrid from "../components/sections/PackagesGrid";
import { packageItems } from "../data/packages";

export default function PackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Packages"
        title="Simple, premium entry points for studio, event, and retainer clients."
        text="Pricing can remain flexible, but visible starting packages help pre-qualify enquiries and reduce low-intent messages."
      />

      <section className="section section-border">
        <div className="container">
          <SectionTitle
            eyebrow="Pricing"
            title="Packages that move visitors toward enquiry"
            text="You can add more detailed package tiers later."
          />
          <PackagesGrid items={packageItems} />
        </div>
      </section>

      <CTASection />
    </>
  );
}
