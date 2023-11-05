import Card from "../components/Card";
import works from "../data/works";
import "../styles/Works.css";

export default function Works() {
  return (
    <section className="works">
      <span className="works-title">RÉALISATIONS</span>
      <p className="works-txt">
        Vous retrouverez ici différents projets, réalisés pendant ma formation
        où en autonomie.
        <br />
        Pour chaque réalisation, vous pourrez dans un premier temps avoir un
        aperçu visuel du projet, découvrir le contexte dans lequel il a été
        réalisé ainsi que les technologies utilisées.
      </p>
      <article className="cards">
        <Card props={works} />
      </article>
    </section>
  );
}
