import SectionTitle from "../components/SectionTitle";

const education = [
  {
    title: "M.Sc. Computer Science",
    place: "Pondicherry University",
    years: "2024–2026",
    detail: "Pursuing",
  },
  {
    title: "B.Sc. Computer Science",
    place: "Rajiv Gandhi Arts & Science College, Puducherry",
    years: "2024",
    detail: "60.03%",
  },
  {
    title: "HSC",
    place: "Vivekananda Govt (B) Hr. Sec. School, Villianur, Puducherry",
    years: "2021",
    detail: "73.14%",
  },
  {
    title: "SSLC",
    place: "Government Hr. Sec. School, Ariyur, Puducherry",
    years: "2019",
    detail: "65.06%",
  },
];

function Education() {
  return (
    <section className="section alt" id="education">
      <div className="container">
        <SectionTitle eyebrow="Journey" title="Education" />
        <div className="cards-grid three">
          {education.map((item, index) => (
            <div
              className="card"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <h3>{item.title}</h3>
              <p className="muted">{item.place}</p>
              <p className="pill subtle">{item.years}</p>
              <p className="detail">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
