import Collapse from "../components/Collapse";
import "../styles/Certifications.css";

export default function Certifications() {
  return (
    <section>
      <div className="certifications">
        <span className="certifications-title">CERTIFICATIONS</span>
        <p className="certifications-txt">
          Les certifications présentées ci-dessous permettent de valoriser les
          compétences acquises au cours de ma formation ainsi que celles
          acquises de manière autodidacte.
        </p>
      </div>
      <article className="certifications-article">
        <Collapse />
      </article>
    </section>
  );
}
