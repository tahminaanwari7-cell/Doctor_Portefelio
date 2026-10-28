
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
