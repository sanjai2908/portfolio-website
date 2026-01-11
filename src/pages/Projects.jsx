import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Blood Donation Management System",
    description:
      "Built a web app for blood banks to log donors, track inventory, and match blood requests quickly using searchable lists and clear status views.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/sanjai2908/blood-donation-web-app",
    demo: "https://sanjai2908.github.io/blood-donation-web-app/",
  },
  {
    title: "ShopEasy E-commerce Website",
    description:
      "Created a responsive bookstore UI that lets users browse and filter titles, view quick details, and experience a cart-ready layout tuned for fast loads.",
    tech: ["React", "Vite", "CSS Grid"],
    github: "https://github.com/sanjai2908/E-commerce",
    demo: "https://sanjai2908.github.io/E-commerce/",
  },
  {
    title: "Student Portfolio Website",
    description:
      "Designed a single-page portfolio with smooth scrolling sections, project highlights, and contact calls-to-action, using AOS animations for a clean presentation.",
    tech: ["React", "AOS", "React Icons"],
    github: "https://github.com/Sanjai2908/student-portfolio",
    demo: "",
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
        <div className="cards-grid three">
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
