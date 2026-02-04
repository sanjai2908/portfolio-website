import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Secure File Vault with Two-Factor Authentication",
    description:
      "Full-stack application with JWT authentication, TOTP-based 2FA using Google Authenticator, secure file upload/download with access control, and complete user profile management. Deployed with React on Vercel and Node.js backend on Render.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "TOTP"],
    github: "https://github.com/sanjai2908/my-vault-2fa",
    demo: "https://my-vault-2fa.vercel.app",
  },
  {
    title: "Blood Donation Management System",
    description:
      "Full-stack web application enabling user registration, secure login/logout with authentication, complete CRUD operations for managing donor profiles and blood inventory, profile view and edit functionality, and request matching algorithms. Includes searchable donor database and real-time inventory tracking.",
    tech: ["Node.js", "MongoDB", "Express.js"],
    github: "https://github.com/sanjai2908/blood-donation-web-app",
    demo: "https://sanjai2908.github.io/blood-donation-web-app/",
  },
  {
    title: "Task Management Application",
    description:
      "Full-stack productivity app with user authentication, task creation, real-time updates, and collaborative features. Built with REST API backend and responsive React frontend with dark mode support.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    github: "https://github.com/sanjai2908/task-manager-app",
    demo: "https://task-manager-app.vercel.app",
  },
  {
    title: "ShopEasy E-commerce Website",
    description:
      "Created a responsive bookstore UI that lets users browse and filter titles, view quick details, and experience a cart-ready layout tuned for fast loads.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/sanjai2908/E-commerce",
    demo: "https://sanjai2908.github.io/E-commerce/",
  },
];

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionTitle
          eyebrow="Work"
          title="Projects"
          subtitle="Recent and conceptual work to sharpen my skills."
        />
        <div className="cards-grid two">
          {projects.map((project, index) => (
            <div
              className="card project-card"
              key={project.title}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <h3>{project.title}</h3>
              <p className="muted">{project.description}</p>
              <div className="badge-row">
                {project.tech.map((technology) => (
                  <span className="tag" key={technology}>
                    {technology}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  className="btn ghost"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub /> GitHub
                </a>
                {project.demo && (
                  <a
                    className="btn primary"
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
