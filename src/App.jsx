import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function SiteLayout() {
  return (
    <div id="wrapper">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services.html" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product.html" element={<ProductsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project-single.html" element={<ProjectPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/service-single.html" element={<ServicePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout />
    </BrowserRouter>
  );
}
