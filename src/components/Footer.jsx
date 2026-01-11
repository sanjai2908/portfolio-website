import { FiGithub, FiLinkedin } from "react-icons/fi";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer-content">
        <p>Copyright © 2026 Sanjai S</p>
        <div className="social-row">
          <a
            href="https://www.linkedin.com/in/sanjai2908/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon-btn"
          >
            <FiLinkedin />
          </a>
          <a
            href="https://github.com/sanjai2908"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon-btn"
          >
            <FiGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
