import { useEffect, useState } from "react";
import heroImage from "../assets/products/Agricultural Equipments/first.webp";
import Product from "./product.jsx";
import "./home.css";

const slides = [
  {
    eyebrow: "Built for better harvests",
    title: "Power your field\nwith confidence.",
    description:
      "Dependable agricultural machinery backed by Tara Harson Agro for smarter, stronger field performance.",
    action: "Explore equipment",
  },
  {
    eyebrow: "Made for modern farming",
    title: "More strength.\nLess effort.",
    description:
      "From soil preparation to planting, Tara Harson Agro helps every season move forward with confidence.",
    action: "View our products",
  },
];

const serviceFeatures = [
  {
    icon: "01",
    title: "Farm planning support",
    description:
      "We help match the right machine to your soil, crop cycle, and operating conditions so every pass is productive.",
  },
  {
    icon: "02",
    title: "Reliable equipment range",
    description:
      "From tillage to planting and crop care, our lineup is built for consistency, comfort, and field performance.",
  },
  {
    icon: "03",
    title: "Service after sales",
    description:
      "Our team supports uptime with guidance, servicing knowledge, and practical recommendations for long-term use.",
  },
  {
    icon: "04",
    title: "Dealer partnerships",
    description:
      "We work with progressive dealers and distributors who understand local farming conditions and customer needs.",
  },
];

const HeroSection = ({ activeSlide, onSlideChange }) => {
  const slide = slides[activeSlide];

  return (
    <section
      className="hero-section"
      id="body"
      aria-label="Tara Harson Agro introduction"
    >
      <div
        className="hero-image"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">{slide.eyebrow}</p>
        <h1>
          {slide.title.split("\n").map((line) => (
            <span key={line}>{line}</span>
          ))}
        </h1>
        <p className="hero-description">{slide.description}</p>
        <a className="hero-button" href="/products">
          {slide.action}
          <span aria-hidden="true">→</span>
        </a>
      </div>
      <div className="slide-controls" aria-label="Hero slides">
        {slides.map((item, index) => (
          <button
            type="button"
            key={item.title}
            className={index === activeSlide ? "active" : ""}
            aria-label={`Show slide ${index + 1}`}
            aria-current={index === activeSlide ? "true" : undefined}
            onClick={() => onSlideChange(index)}
          />
        ))}
      </div>
      <p className="hero-scroll">
        Scroll to discover <span aria-hidden="true">↓</span>
      </p>
    </section>
  );
};

const IntroSection = () => (
  <section className="intro-section" id="about">
    <p className="eyebrow">The Tara Harson Agro difference</p>
    <h2>Tools that keep the whole farm moving.</h2>
    <p>
      Thoughtful machines, practical support, and the confidence to make every
      working day count. We design durable agricultural solutions for growers
      who need dependable output across changing field conditions.
    </p>
  </section>
);

const ServicesSection = () => (
  <section className="anchor-section services-section" id="services">
    <div className="section-heading">
      <p className="eyebrow">Farm-ready support</p>
      <h2>Solutions built around the realities of the field.</h2>
    </div>
    <div className="service-grid">
      {serviceFeatures.map((item) => (
        <article key={item.title} className="service-card">
          <span className="service-icon" aria-hidden="true">
            {item.icon}
          </span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  </section>
);

const CallbackModal = ({ onClose }) => (
  <div
    className="callback-modal-backdrop"
    role="presentation"
    onClick={onClose}
  >
    <div
      className="callback-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="callback-modal-title"
      onClick={(event) => event.stopPropagation()}
    >
      <button
        className="callback-modal-close"
        type="button"
        onClick={onClose}
        aria-label="Close callback options"
      >
        ×
      </button>
      <p className="eyebrow">Choose how to connect</p>
      <h2 id="callback-modal-title">Request a callback</h2>
      <p>Choose WhatsApp or email, and our team will get back to you.</p>
      <div className="callback-modal-actions">
        <a
          className="callback-option callback-option-whatsapp"
          href="https://wa.me/919719102062?text=Hello%2C%20I%20would%20like%20to%20request%20a%20callback%20about%20farm%20equipment."
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
          <span aria-hidden="true">→</span>
        </a>
        <a
          className="callback-option callback-option-email"
          href="mailto:Taraharson@gmail.com?subject=Farm%20Equipment%20Callback%20Request"
        >
          Email
          <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  </div>
);

const ContactSection = () => {
  const [isCallbackOpen, setIsCallbackOpen] = useState(false);

  return (
    <section className="anchor-section contact-section" id="contact">
      <div className="contact-panel">
        <div className="contact-copy">
          <p className="eyebrow">Let's grow together</p>
          <h2>Need the right machine for your next season?</h2>
          <p>
            Tell us what you grow, the jobs you need to complete, and the
            support you want from your equipment partner.
          </p>
        </div>
        <div className="contact-details">
          <a href="tel:+919758783063">
            <span className="contact-icon" aria-hidden="true">
              ☎
            </span>
            +91 97587 83063
          </a>
          <a href="mailto:taraharsonagro@gmail.com">
            <span className="contact-icon" aria-hidden="true">
              ✉
            </span>
            taraharsonagro@gmail.com
          </a>
          <a href="https://wa.me/919719102062">
            <span
              className="contact-icon contact-icon-whatsapp"
              aria-hidden="true"
            >
              WA
            </span>
            WhatsApp: +91 97191 02062
          </a>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Tara%20Harson%20Agro%2C%20Tilak%20Nagar%2C%20Muzaffarnagar%2C%20India%20251001"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon" aria-hidden="true">
              ⌖
            </span>
            Tara Harson Agro
            <br />
            Bhopa Rd, Tilak Nagar
            <br />
            Muzaffarnagar, Uttar Pradesh 251001
          </a>
          <button
            className="hero-button callback-trigger"
            type="button"
            onClick={() => setIsCallbackOpen(true)}
          >
            <span
              className="contact-icon contact-icon-button"
              aria-hidden="true"
            >
              ↗
            </span>
            Request a callback
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      {isCallbackOpen && (
        <CallbackModal onClose={() => setIsCallbackOpen(false)} />
      )}
    </section>
  );
};

const Home = ({ targetSection }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % slides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!targetSection) return;

    const section = document.getElementById(targetSection);
    section?.scrollIntoView({ block: "start" });
  }, [targetSection]);

  return (
    <>
      <HeroSection activeSlide={activeSlide} onSlideChange={setActiveSlide} />
      <IntroSection />
      <Product />
      <ServicesSection />
      <ContactSection />
    </>
  );
};

export default Home;
