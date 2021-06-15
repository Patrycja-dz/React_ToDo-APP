import "./style.css";

const Section = ({ title, extraContent, body }) => (
  <section className="section">
    <header className="section__header">
      <h2 className="section__heading">{title}</h2>
      {extraContent}
    </header>
    <div className="section__wrapper">{body}</div>
  </section>
);
export default Section;
