import { FiX, FiDownload } from "react-icons/fi";

function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Handle overlay click to close modal
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains("modal-overlay")) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h3>Resume Preview</h3>
          <button className="modal-close" onClick={onClose} aria-label="Close">
            <FiX size={24} />
          </button>
        </div>
        <div className="modal-body">
          <iframe
            src="/portfolio-website/assets/Sanjai_S_Resume.pdf"
            title="Resume Preview"
            className="resume-iframe"
          />
        </div>
        <div className="modal-footer">
          <a
            href="/portfolio-website/assets/Sanjai_S_Resume.pdf"
            download="Sanjai_S_Resume.pdf"
            className="btn primary"
          >
            <FiDownload />
            Download Resume
          </a>
          <button className="btn ghost" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResumeModal;
