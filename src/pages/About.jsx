import SectionTitle from "../components/SectionTitle";

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <SectionTitle
          eyebrow="Profile"
          title="About Me"
          subtitle="Building clean, reliable web experiences across frontend and backend."
        />
        <div className="cards-grid" data-aos="fade-up">
          <div className="card">
            <h3>Currently</h3>
            <p>
              M.Sc. Computer Science student (2024–2026) learning modern web
              development and shipping portfolio projects to practice delivery.
            </p>
          </div>
          <div className="card">
            <h3>Interests</h3>
            <p>
              Full Stack and Frontend development—crafting responsive UI,
              integrating APIs, and keeping performance and accessibility in
              mind.
            </p>
          </div>
          <div className="card">
            <h3>Knowledge</h3>
            <p>
              Practical with React, JavaScript, HTML/CSS, and REST basics;
              learning Node.js and MongoDB; comfortable using GitHub for version
              control.
            </p>
          </div>
          <div className="card">
            <h3>Mindset</h3>
            <p>
              Collaborative, detail-focused, and consistent—prefer shipping
              small improvements often and learning from feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
