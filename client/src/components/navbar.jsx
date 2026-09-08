import { useState } from "react";
import "./navbar.css";
import logo from "../assets/logo/loog.png";

const links = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products"],
  ["Services", "/services"],
  ["Contact", "/contact"],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-navigation" id="navigation">
      <div className="nav-container">
        <a className="brand" href="/" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Tara Harson Agro" className="brand-logo" />
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>
        <nav
          id="primary-navigation"
          className={isOpen ? "nav-menu is-open" : "nav-menu"}
        >
          {links.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="/contact"
            onClick={() => setIsOpen(false)}
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
