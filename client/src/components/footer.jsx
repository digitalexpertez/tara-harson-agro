import "./footer.css";
import logo from "../assets/logo/loog.png";

const footerLinks = [
  { label: "All machinery", href: "/products" },
  { label: "Our standard", href: "/about" },
  { label: "Start an enquiry", href: "/contact" },
];

const contactItems = [
  { label: "+91 97587 83063", href: "tel:+919758783063", icon: "☎" },
  {
    label: "taraharsonagro@gmail.com",
    href: "mailto:taraharsonagro@gmail.com",
    icon: "✓",
  },
  {
    label: "Bhopa Rd, Tilak Nagar, Muzaffarnagar, Uttar Pradesh 251001",
    href: "https://www.google.com/maps/search/?api=1&query=Tara%20Harson%20Agro%2C%20Tilak%20Nagar%2C%20Muzaffarnagar%2C%20India%20251001",
    icon: "◉",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/tara_agriculture?igsh=ZGJnenF3ajhleDVv",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
          className="social-icon-outline"
        />
        <circle cx="12" cy="12" r="4" className="social-icon-outline" />
        <circle cx="17.5" cy="6.5" r="1" className="social-icon-fill" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/TARAharson/",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14 8h2V4.5c-.35-.05-1.55-.15-2.95-.15-2.92 0-4.92 1.78-4.92 5.05V12H5v3.9h3.13V24h3.84v-8.1h3.19l.51-3.9h-3.7V9.76c0-1.13.31-1.76 2.03-1.76Z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919719102062",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2a9.7 9.7 0 0 0-8.4 14.55L2 22l5.58-1.55A9.7 9.7 0 1 0 12 2Zm0 17.7a8 8 0 0 1-4.08-1.12l-.29-.17-3.31.92.9-3.22-.19-.31A8 8 0 1 1 12 19.7Zm4.4-5.99c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.18-.7-.62-1.18-1.38-1.32-1.62-.14-.24-.01-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@taraharsonagro",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.58 7.19a2.99 2.99 0 0 0-2.1-2.12C17.63 4.55 12 4.55 12 4.55s-5.63 0-7.48.52a2.99 2.99 0 0 0-2.1 2.12A31.4 31.4 0 0 0 1.9 12a31.4 31.4 0 0 0 .52 4.81 2.99 2.99 0 0 0 2.1 2.12c1.85.52 7.48.52 7.48.52s5.63 0 7.48-.52a2.99 2.99 0 0 0 2.1-2.12A31.4 31.4 0 0 0 22.1 12a31.4 31.4 0 0 0-.52-4.81ZM10.1 15.05v-6.1L15.35 12l-5.25 3.05Z" />
      </svg>
    ),
  },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-inner">
      <div className="footer-brand-block">
        <div className="brand-lockup">
          <img
            src={logo}
            alt="Tara Harson Agro"
            className="footer-brand-logo"
          />
        </div>
        <div className="footer-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6947.0913478168495!2d77.73619598598327!3d29.471274267608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c1b37c6a44b97%3A0x858ac2e3ec6e5ad3!2sTara%20Harson%20Agro!5e0!3m2!1sen!2sin!4v1788782718130!5m2!1sen!2sin"
            title="Tara Harson Agro location"
            loading="lazy"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>

      <div className="footer-copy">
        Machinery for the work that matters. Tara Harson Agro builds
        field-tested equipment for growers across Uttar Pradesh and beyond.
      </div>

      <div className="footer-column">
        <h4>EXPLORE</h4>
        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="footer-column contact-column">
        <h4>TALK TO TARA HARSON</h4>
        <div className="contact-list" aria-label="Contact details">
          {contactItems.map((item) => (
            <a key={item.label} className="contact-item" href={item.href}>
              <span className="contact-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </div>
        <div className="social-links" aria-label="Social media links">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              className="social-link"
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Tara Harson Agro on ${social.label}`}
              title={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>

    <div className="footer-bottom-bar">
      <div className="footer-legal">
        © 2024 Tara Harson Agro. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
