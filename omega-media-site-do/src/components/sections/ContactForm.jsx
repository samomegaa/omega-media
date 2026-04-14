import React, { useState } from "react";
import { siteConfig } from "../../config_site";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ type: "idle", message: "" });

  function updateField(event) {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending enquiry..." });

    if (!siteConfig.formEndpoint) {
      const subject = encodeURIComponent(`Omega enquiry from ${form.name}`);
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\n\nMessage:\n${form.message}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setStatus({
        type: "success",
        message: "Your email app is opening because no form endpoint is configured yet.",
      });
      return;
    }

    try {
      const response = await fetch(siteConfig.formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Form submission failed.");
      }

      setForm(initialForm);
      setStatus({ type: "success", message: "Thank you. Your enquiry has been sent successfully." });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong while sending your enquiry. Please try WhatsApp or email instead.",
      });
    }
  }

  return (
    <article className="card form-card">
      <h3 style={{ marginTop: 0, fontSize: 28 }}>Book a consultation</h3>
      <p className="form-helper">
        {siteConfig.formEndpoint
          ? "This form is connected for live submissions."
          : "Set VITE_FORMSPREE_ENDPOINT in your environment to enable live form submissions."}
      </p>

      <form className="form-grid" onSubmit={handleSubmit}>
        <input className="input" name="name" placeholder="Full name" value={form.name} onChange={updateField} required />
        <input className="input" name="email" type="email" placeholder="Email address" value={form.email} onChange={updateField} required />
        <input className="input" name="phone" placeholder="Phone number" value={form.phone} onChange={updateField} required />
        <input className="input" name="service" placeholder="Service needed" value={form.service} onChange={updateField} />
        <textarea className="textarea" name="message" placeholder="Tell us about your project" value={form.message} onChange={updateField} />
        <button className="btn btn-primary" type="submit" disabled={status.type === "loading"}>
          {status.type === "loading" ? "Sending..." : "Send enquiry"}
        </button>
      </form>

      {status.message ? (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      ) : null}
    </article>
  );
}
