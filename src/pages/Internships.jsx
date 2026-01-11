import SectionTitle from "../components/SectionTitle";

const internships = [
  {
    role: "Lenovo In-Plant Training",
    place: "Manufacturing Operations, Puducherry",
    period: "Aug 2023",
    summary:
      "Observed manufacturing workflows and learned operational best practices.",
  },
  {
    role: "Sales Trainee",
    place: "Piramal Capital & Housing Finance Limited, Puducherry",
    period: "Jun 2024 – Jun 2025",
    summary:
      "Supported sales operations and strengthened communication with customers.",
  },
];

function Internships() {
  return (
    <section className="section" id="internships">
      <div className="container">
        <SectionTitle eyebrow="Experience" title="Internships" />
        <div className="cards-grid two">
          {internships.map((item, index) => (
            <div
              className="card"
              key={item.role}
              data-aos="slide-up"
              data-aos-delay={index * 100}
            >
              <div className="card-top">
                <h3>{item.role}</h3>
                <span className="pill subtle">{item.period}</span>
              </div>
              <p className="muted">{item.place}</p>
              <p>{item.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Internships;
