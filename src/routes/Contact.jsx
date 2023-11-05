import "../styles/Contact.css";
import Form from "./../components/Form";
import { Link } from "react-router-dom";

export default function contact() {
  return (
    <section>
      <div className="contact">
        <span className="contact-title">CONTACT</span>

        <p>
          Vous souhaitez en savoir plus sur mon parcours et mes compétences ?
          N'hésitez pas à me contacter, que ce soit via le formulaire de contact
          ci-dessous, sur{" "}
          <Link to="https://www.linkedin.com/in/jumic/">Linkedin</Link> où
          encore directement par e-mail : micheljulien1403@gmail.com.
        </p>

        <Form />

        <p className="goodbye">Merci de votre visite, et à bientôt !</p>
      </div>
    </section>
  );
}
