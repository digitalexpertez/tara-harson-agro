import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";
import Home from "./pages/home.jsx";
import Product from "./pages/product.jsx";
import "./App.css";

const sectionPaths = new Set(["/about", "/services", "/contact"]);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!sectionPaths.has(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-shell">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home targetSection="about" />} />
            <Route path="/products" element={<Product />} />
            <Route path="/products/:categorySlug" element={<Product />} />
            <Route
              path="/products/:categorySlug/:productSlug"
              element={<Product />}
            />
            <Route
              path="/services"
              element={<Home targetSection="services" />}
            />
            <Route path="/contact" element={<Home targetSection="contact" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
