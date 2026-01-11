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
          <p className="pill">MSc Computer Science Student</p>
          <h1>Sanjai S</h1>
          <p className="headline">
            Aspiring Full Stack Developer crafting clean, user-focused web
            experiences.
          </p>
          <p className="muted">
            Passionate computer science student with basic working knowledge in
            web development and programming. I enjoy learning modern tools and
            shipping polished interfaces.
          </p>
          <div className="cta-row">
            <button className="btn primary" onClick={openResumeModal}>
              <FiDownload />
              View Resume
            </button>
            <button className="btn ghost" onClick={() => scrollTo("contact")}>
              <FiMail />
              Contact Me
            </button>
            <a
              className="btn ghost"
              href="https://www.linkedin.com/in/sanjai2908/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
              LinkedIn
            </a>
            <a
              className="btn ghost"
              href="https://github.com/sanjai2908"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
              GitHub
            </a>
          </div>
          <div className="hero-meta">
            <span className="tag">Full Stack Focus</span>
            <span className="tag">Team Player</span>
            <span className="tag">Continuous Learner</span>
          </div>
        </div>
        <div className="hero-card" data-aos="fade-left">
          <div className="card-inner">
            <p className="badge">Available for internships</p>
            <p className="quote">
              “I build reliable, modern UIs and collaborate to turn ideas into
              usable products.”
            </p>
            <div className="info-grid">
              <div>
                <p className="label">Email</p>
                <p className="value">sanjais2908@gmail.com</p>
              </div>
              <div>
                <p className="label">Phone</p>
                <p className="value">9003084706</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ResumeModal isOpen={isResumeModalOpen} onClose={closeResumeModal} />
    </section>
  );
}

export default Hero;
