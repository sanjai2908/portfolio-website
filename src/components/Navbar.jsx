import { useEffect, useState } from "react";
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "internships", label: "Internships" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (id) => {
    scrollTo(id);
    setOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <div
          className="logo"
          onClick={() => scrollTo("hero")}
          role="button"
          tabIndex={0}
        >
          Sanjai S
        </div>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label="Toggle dark mode"
            onClick={toggleTheme}
            title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? <FiMoon size={20} /> : <FiSun size={20} />}
          </button>
          <button
            className="menu-btn"
            aria-label="Toggle navigation"
            onClick={() => setOpen(!open)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
        <nav className={`nav-links ${open ? "show" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <div className="nav-socials">
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
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
