import { useState } from "react";
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import ResumeModal from "../components/ResumeModal";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const openResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };
  return (
    <section className="hero" id="hero">
      <div className="container hero-grid">
        <div className="hero-text" data-aos="fade-up">
          <p className="pill">Open to Internship and Job Opportunities</p>
          <h1>Sanjai S</h1>
          <p className="headline">Aspiring Full Stack Developer</p>
          <p className="muted">
            I build reliable, modern UIs and collaborate to turn ideas into
            usable products.
          </p>
          <div className="cta-row">
            <button className="btn primary" onClick={openResumeModal}>
              <FiDownload />
              View Resume
            </button>
            <button
              className="btn ghost"
              onClick={() => scrollTo("contact")}
              aria-label="Go to contact section"
            >
              <FiMail />
              Contact Me
            </button>
          </div>
          <div className="hero-socials">
            <a
              href="mailto:sanjais2908@gmail.com"
              className="icon-btn"
              title="Send Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/sanjai2908/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="icon-btn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="https://github.com/sanjai2908"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="icon-btn"
            >
              <FiGithub size={20} />
            </a>
          </div>
        </div>
        <div className="hero-image" data-aos="fade-left">
          <div className="profile-wrapper">
            <img
              src="/portfolio-website/profile.jpg"
              alt="Sanjai S Profile"
              className="profile-img"
            />
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </section>
  );
}

export default Hero;
