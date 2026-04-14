import React from "react";
import { academyCourses } from "../data/academy";
import PageHero from "../components/layout/PageHero";
import CTASection from "../components/layout/CTASection";
import { GraduationCap } from "lucide-react";

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Academy"
        title="Build a training division that generates credibility and recurring revenue."
        text="The academy should be presented as practical, industry-oriented, and taught from a working studio environment."
      />

      <section className="section section-border">
        <div className="container grid-2">
          <article className="card service-card">
            <h3>Courses</h3>
            <div style={{ display: "grid", gap: 14 }}>
              {academyCourses.map((course) => (
                <div key={course} className="card" style={{ padding: 16, display: "flex", gap: 12 }}>
                  <GraduationCap size={18} />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="card service-card">
            <h3>Why the academy matters</h3>
            <p>
              Training strengthens your brand, produces extra income, creates a
              pipeline for future staff, and positions Omega as an authority rather
              than just a service provider.
            </p>
          </article>
        </div>
      </section>

      <CTASection />
    </>
  );
}
