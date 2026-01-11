import SectionTitle from "../components/SectionTitle";

const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript"] },
  { title: "Frontend", items: ["HTML", "CSS", "Bootstrap", "React.js"] },
  { title: "Database", items: ["MongoDB", "MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "VS Code", "MS Office"] },
];

function Skills() {
  return (
    <section className="section alt" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="Toolkit"
          title="Skills"
          subtitle="Core technologies and tools I use."
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div
              className="skill-card"
              key={group.title}
              data-aos={index % 2 === 0 ? "slide-right" : "slide-left"}
              data-aos-delay={index * 100}
            >
              <h4>{group.title}</h4>
              <div className="badge-row">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
