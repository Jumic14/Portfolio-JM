import { Link } from 'react-router-dom' 

export default function ErrorPage() {
  return (
    <div id="error-page">
      <div className="error-number">
        404
        </div>
      <p>
        Oups! La page que vous demandez n'existe pas.
        </p>
      <div className="error-link">
        { <Link to="/Home">Retourner sur la page d'accueil</Link> }
        </div>
    </div>
  );
}