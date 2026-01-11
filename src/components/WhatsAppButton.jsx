import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "9003084706";
  const message = "Hi Sanjai, I saw your portfolio and would like to connect.";

  // Create WhatsApp link for both mobile and desktop
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="whatsapp-icon" />
      <span className="whatsapp-tooltip">Chat on WhatsApp</span>
    </a>
  );
}

export default WhatsAppButton;
