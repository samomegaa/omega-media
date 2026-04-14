import React from "react";
import PageHero from "../components/layout/PageHero";
import SectionTitle from "../components/sections/SectionTitle";
import ContactCards from "../components/sections/ContactCards";
import ContactForm from "../components/sections/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Make it easy for serious clients to reach you quickly."
        text="This page routes enquiries into WhatsApp, email, phone, or the live contact form, depending on how you configure the environment values."
      />

      <section className="section section-border">
        <div className="container grid-2">
          <div>
            <SectionTitle
              eyebrow="Get in touch"
              title="Use the channel your client is most likely to respond to"
              text="For many Nigerian clients, WhatsApp and phone contact convert strongly. Email and the web form remain useful for corporate and more formal enquiries."
            />
            <ContactCards />
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
