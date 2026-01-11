import { useRef, useState } from "react";
import { FiMail, FiPhone, FiSend, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import SectionTitle from "../components/SectionTitle";

// Initialize EmailJS with your Public Key
emailjs.init("clzYlYAnQF0W4aT61");

function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);

  // WhatsApp details
  const phoneNumber = "9003084706";
  const whatsappMessage =
    "Hi Sanjai, I saw your portfolio and want to connect.";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      // Send email using emailjs.sendForm()
      await emailjs.sendForm(
        "service_6jt5ex3",
        "template_xz9r10a",
        formRef.current
      );

      alert("Message sent successfully!");
      // Reset form after successful submit
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Message failed to send");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section alt" id="contact">
      <div className="container">
        <SectionTitle
          eyebrow="Connect"
          title="Contact"
          subtitle="Let us collaborate or discuss opportunities."
        />
        <div className="contact-grid">
          <div className="card contact-card" data-aos="slide-right">
            <h3>Reach Me</h3>
            <p className="muted">
              Feel free to email or call. I am open to internships,
              collaborations, and learning opportunities.
            </p>
            <p className="contact-line">
              <FiMail /> sanjais2908@gmail.com
            </p>
            <p className="contact-line">
              <FiPhone /> 9003084706
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="btn ghost"
              style={{ marginTop: "1rem" }}
            >
              <FaWhatsapp />
              Message on WhatsApp
            </a>
            <div className="contact-links-row">
              <a
                className="icon-btn"
                href="https://www.linkedin.com/in/sanjai2908/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FiLinkedin />
              </a>
              <a
                className="icon-btn"
                href="https://github.com/sanjai2908"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FiGithub />
              </a>
            </div>
          </div>
          <div className="card form-card" data-aos="slide-left">
            <h3>Send a Message</h3>
            <form ref={formRef} className="form" onSubmit={handleSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Write your message"
                  required
                />
              </label>
              <button
                type="submit"
                className="btn primary full"
                disabled={sending}
              >
                <FiSend />
                {sending ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
