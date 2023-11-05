import "../styles/About.css";
import cv from "./../assets/images/cv-fr.png";

export default function about() {
  return (
    <section className="about">
      <span className="about-title">À PROPOS DE MOI</span>
      <p className="about-txt">
        Titulaire d'une licence en développement commercial, j'ai occupé
        plusieurs postes de commercial dans différents secteurs industriels au
        cours de ces 10 dernières années. <br />
        Ces expériences m'ont permis d'acquérir de nombreuses compétences clés
        dans la vie de toute entreprise : travail en équipe, rigueur,
        communication, organisation, flexibilité, où encore gestion de
        l'urgence.
      </p>
      <p className="about-txt">
        Passionné par le monde du web, ma formation a tout d'abord débuté de
        manière autodidacte, avec pour seule intention de satisfaire ma
        curiosité. J'ai commencé par appréhender les rouages de ce nouveau
        secteur avant de me lancer dans mes premières lignes de code pour
        réaliser mon premier site web. <br />
        Au fil du temps et de la pratique, cette passion s'est transformée en
        projet, et ma décision d'en faire mon métier était prise.
      </p>
      <p className="about-txt">
        Je me suis lancé dans une reconversion professionnelle en suivant une
        formation de 6 mois 100% remote, dispensé par OpenClassrooms. <br />
        A travers cette formation, j'ai réalisé plusieurs projets
        professionnalisants (que vous pouvez retrouver dans l'onglet
        "Réalisations"), me permettant de découvrir et acquérir des compétences
        à la fois en front-end, en back-end mais aussi d'appréhender de
        nouvelles méthodologies de travail, telles que les méthodes agiles.
        <br />
        Au terme de cette formation, j'ai obtenu en juillet 2023 mon diplôme de
        Développeur Web*.
      </p>
      <p className="about-degree">
        *Diplôme enregistré au RNCP à niveau 5 (Equivalent Bac +2)
      </p>
      <p className="about-txt">Vous pouvez retrouver mon CV complet ci-dessous : </p>
      <img src={cv} className="cv-img" alt="cv img" />
    </section>
  );
}
