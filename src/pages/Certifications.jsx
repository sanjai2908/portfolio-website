import { useEffect, useState } from "react";
import { FiExternalLink, FiX } from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";

const certificates = [
  {
    name: "The Joy of Computing Using Python (NPTEL)",
    file: "/certificates/joy-of-computing-python.pdf",
  },
  {
    name: "Data Science Workshop – Train to Transform",
    file: "/certificates/data-scientist-workshop.pdf",
  },
  {
    name: "Cloud Computing Fundamentals (Simplilearn)",
    file: "/certificates/cloud-computing-simplilearn.pdf",
  },
  {
    name: "High Performance Computing (NPTEL, IIT Kanpur)",
    file: "/certificates/hpc-nptel.pdf",
  },
  {
    name: "Diploma in Computer Application",
    file: "/certificates/diploma-computer-application.pdf",
  },
];

function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSelectedCertificate(null);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  const openModal = (cert) => {
    setSelectedCertificate(cert);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <section className="section" id="certifications">
      <div className="container">
        <SectionTitle eyebrow="Upskilling" title="Certifications" />
        <div className="list">
          {certificates.map((cert, index) => (
            <button
              type="button"
              className="list-item cert-link"
              key={cert.name}
              onClick={() => openModal(cert)}
              data-aos="fade-left"
              data-aos-delay={index * 50}
            >
              <span className="dot" />
              <p>{cert.name}</p>
              <FiExternalLink className="cert-icon" aria-hidden />
            </button>
          ))}
        </div>
      </div>

      {isOpen && selectedCertificate && (
        <div className="cert-overlay" onClick={closeModal}>
          <div
            className="modal-content cert-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.name}
          >
            <div className="modal-header">
              <h2>{selectedCertificate.name}</h2>
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Close certificate"
              >
                <FiX />
              </button>
            </div>
            <div className="modal-body cert-modal-body">
              <iframe
                src={selectedCertificate.file}
                title={selectedCertificate.name}
                className="cert-iframe"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Certifications;
