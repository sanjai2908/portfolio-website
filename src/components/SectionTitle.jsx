function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="section-title" data-aos="fade-up">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

export default SectionTitle;
