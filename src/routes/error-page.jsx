import { Link } from "react-router-dom";
import err from "./../assets/images/404.jpg";

export default function ErrorPage() {
  return (
    <div id="error-page">
      <div className="error-number">
        <img src={err} className="err-img" alt="err img" />
      </div>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <p></p>
      <div className="error-link">
        {<Link to="/Home">Retourner sur la page d'accueil</Link>}
      </div>
    </div>
  );
}
