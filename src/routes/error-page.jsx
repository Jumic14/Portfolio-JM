import { useRouteError } from "react-router-dom";
import { Link } from 'react-router-dom' 
import Header from './../components/Header'
import Footer from './../components/Footer'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Header />
      <div className="error-number">
        404
        </div>
      <p>
        Oups! La page que vous demandez n'existe pas.
        </p>
      <div className="error-link">
        { <Link to="/Home">Retourner sur la page d'accueil</Link> }
        </div>
        <Footer />
    </div>
  );
}