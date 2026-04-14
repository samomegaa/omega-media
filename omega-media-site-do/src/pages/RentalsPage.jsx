import React from "react";
import { rentalItems } from "../data/rentals";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/layout/CTASection";

export default function RentalsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rentals"
        title="Monetise selected production gear through a controlled rental workflow."
        text="This page should stay straightforward: what is available, who can rent, what deposits are required, and how to enquire."
      />

      <section className="section section-border">
        <div className="container">
          <div className="grid-3">
            {rentalItems.map((item) => (
              <article key={item} className="card service-card">
                <h3>{item}</h3>
                <p>
                  Add availability, rate, deposit requirements, and rental conditions here.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
