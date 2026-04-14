import React from "react";
import { Routes, Route } from "react-router-dom";
import SiteHeader from "./components/layout/SiteHeader";
import SiteFooter from "./components/layout/SiteFooter";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import PackagesPage from "./pages/PackagesPage";
import AcademyPage from "./pages/AcademyPage";
import RentalsPage from "./pages/RentalsPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/rentals" element={<RentalsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}
