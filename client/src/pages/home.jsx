import { useEffect, useState } from "react";
import heroImage from "../assets/products/IMG_20200221_111257.jpg.jpeg";
import heroImageTwo from "../assets/products/IMG_20200207_154746.jpg.jpeg";
import Product from "./product.jsx";
import "./home.css";

const aboutValues = [
  "Quality",
  "Reliability",
  "Innovation",
  "Farmer-first service",
];

const slides = [
  {
    eyebrow: "Built for better harvests",
    title: "Power your field\nwith confidence.",
    description:
      "Dependable agricultural machinery backed by Tara Harson Agro for smarter, stronger field performance.",
    action: "Explore equipment",
    image: heroImage,
  },
  {
    eyebrow: "Made for modern farming",
    title: "More strength.\nLess effort.",
    description:
      "From soil preparation to planting, Tara Harson Agro helps every season move forward with confidence.",
    action: "View our products",
    image: heroImageTwo,
  },
];

const serviceFeatures = [
  {
    icon: "01",
    title: "Farm machinery supply",
    description:
      "Explore dependable tractor attachments, ploughs, seeders, harvesters, and crop-care equipment for everyday farm work.",
  },
  {
    icon: "02",
    title: "Maintenance and repair",
    description:
      "Keep your equipment working with practical servicing guidance, regular check-ups, and support for spare-part needs.",
  },
  {
    icon: "03",
    title: "Custom farm solutions",
    description:
      "We help identify machinery configurations suited to your crop, soil, field conditions, and operating requirements.",
  },
  {
    icon: "04",
    title: "Farmer training",
    description:
      "Get clear guidance on using modern equipment efficiently and getting the best performance from every machine.",
  },
  {
    icon: "05",
    title: "After-sales support",
    description:
      "Our team stays available for product guidance, customer care, and practical help when equipment needs attention.",
  },
  {
    icon: "06",
    title: "Sustainable farming tools",
    description:
      "Choose solutions that support efficient field operations, reduce unnecessary effort, and encourage responsible resource use.",
  },
  {
    icon: "07",
    title: "Equipment guidance",
    description:
      "We help farmers compare suitable options and plan the right equipment approach for their next season.",
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
      <div className="hero-images" aria-hidden="true">
        {slides.map((item, index) => (
          <div
            key={item.image}
            className={`hero-image ${index === activeSlide ? "active" : ""}`}
            style={{ backgroundImage: `url("${item.image}")` }}
          />
        ))}
      </div>
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

export const IntroSection = () => (
  <section className="intro-section" id="about">
    <p className="eyebrow">The Tara Harson Agro difference</p>
    <h2>Empowering farmers with modern machinery.</h2>
    <p className="intro-description">
      Thoughtful machines, practical support, and the confidence to make every
      working day count. We design durable agricultural solutions for growers
      who need dependable output across changing field conditions. From soil
      preparation and land leveling to sugarcane planting, ridging, spraying,
      and ratoon management, our equipment is made to support the work that
      keeps every season moving. We stay close to the needs of farmers by
      offering practical guidance before and after every purchase.
    </p>
    <div className="about-content-grid">
      <div>
        <p className="about-label">Our mission</p>
        <p>
          We make dependable agricultural machinery more accessible, helping
          farmers work with greater efficiency, confidence, and control.
        </p>
      </div>
      <div>
        <p className="about-label">Product expertise</p>
        <p>
          Our range supports land preparation, cultivator work, seeding,
          fertilizer placement, sugarcane planting, ridging, spraying, and
          ratoon management.
        </p>
      </div>
    </div>
    <div className="about-values" aria-label="Our core values">
      {aboutValues.map((value) => (
        <span key={value}>{value}</span>
      ))}
    </div>
    <p className="about-impact">
      Practical equipment reduces effort, supports timely farm operations, and
      helps growers make every working season more productive.
    </p>
    <div className="about-actions">
      <a className="hero-button" href="/products">
        Explore our products <span aria-hidden="true">→</span>
      </a>
      <a className="about-contact-link" href="/contact">
        Discuss your needs <span aria-hidden="true">→</span>
      </a>
    </div>
  </section>
);

export const ServicesSection = () => (
  <section className="anchor-section services-section" id="services">
    <div className="section-heading">
      <p className="eyebrow">Farm-ready support</p>
      <h2>Our services for farmers.</h2>
      <p>
        From choosing the right machine to keeping it productive in the field,
        we support farmers with practical equipment solutions and responsive
        guidance.
      </p>
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
    <div className="service-highlight">
      <p className="eyebrow">The benefit</p>
      <h3>Save time. Reduce effort. Increase productivity.</h3>
      <p>
        Talk with our team about your crop, land, and working conditions so we
        can help you choose a more confident path forward.
      </p>
    </div>
    <div className="service-actions">
      <a className="hero-button" href="/products">
        Explore our products <span aria-hidden="true">→</span>
      </a>
      <a className="service-contact-link" href="/contact">
        Contact us for support <span aria-hidden="true">→</span>
      </a>
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
          <a href="tel:+919719102062">
            <span className="contact-icon" aria-hidden="true">
              ☎
            </span>
            +91 97191 02062
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
      <Product />
      <ContactSection />
    </>
  );
};

export default Home;
