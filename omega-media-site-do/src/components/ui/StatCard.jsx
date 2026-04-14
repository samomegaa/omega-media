import React from "react";

export default function StatCard({ value, label }) {
  return (
    <article className="card">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
    </article>
  );
}
