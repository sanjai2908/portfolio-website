import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3 className="footer-title">Sanjai S</h3>
            <p className="footer-subtitle">Aspiring Full Stack Developer</p>
            <p className="footer-description">
              Building innovative solutions with React, Node.js, and modern web
              technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="footer-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contact</h4>
            <div className="footer-contact">
              <a
                href="mailto:sanjais2908@gmail.com"
                className="footer-contact-item"
              >
                <FiMail />
                <span>sanjais2908@gmail.com</span>
              </a>
              <div className="footer-contact-item">
                <FiPhone />
                <span>+91 9003084706</span>
              </div>
              <div className="footer-contact-item">
                <FiMapPin />
                <span>Pondicherry, India</span>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h4 className="footer-section-title">Follow</h4>
            <div className="footer-social">
              <a
                href="https://www.linkedin.com/in/sanjai2908/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="footer-social-btn"
              >
                <FiLinkedin />
              </a>
              <a
                href="https://github.com/sanjai2908"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="footer-social-btn"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Sanjai S. All rights reserved.
          </p>
          <p className="footer-credit">Designed & Built with ❤️</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
