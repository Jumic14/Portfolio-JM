import { Link } from "react-router-dom";
import "../styles/Header.css";
import home from "./../assets/images/home-icon.png";
import about from "./../assets/images/about-icon.png";
import work from "./../assets/images/work-icon.png";
import certifications from "./../assets/images/certifications-icon.png";
import contact from "./../assets/images/contact-icon.png";


export default function HeaderChild() {
  return (
    <div className="header">
      <div className="header-home">
        {
          <Link to="/Home">
            <span>JM</span>
          </Link>
        }
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            {
              <div class="nav-container">
                <Link to="/Home">
                  <img src={home} className="nav-img" alt="nav home img" />
                </Link>
                <div class="nav text">ACCUEIL</div>
              </div>
            }
          </li>
          <li>
            {
              <div class="nav-container">
                <Link to="/About">
                  <img src={about} className="nav-img" alt="nav work img" />
                </Link>
                <div class="nav text">À PROPOS DE MOI</div>
              </div>
            }
          </li>
          <li>
            {
              <div class="nav-container">
                <Link to="/Works">
                  <img src={work} className="nav-img" alt="nav work img" />
                </Link>
                <div class="nav text">RÉALISATIONS</div>
              </div>
            }
          </li>
          <li>
            {
              <div class="nav-container">
                <Link to="/Certifications">
                  <img
                    src={certifications}
                    className="nav-img"
                    alt="stack img"
                  />
                </Link>
                <div class="nav text">CERTIFICATIONS</div>
              </div>
            }
          </li>
          <li>
            {
              <div class="nav-container">
                <Link to="/Contact">
                  <img
                    src={contact}
                    className="nav-img"
                    alt="nav contact img"
                  />
                </Link>
                <div class="nav text">CONTACT</div>
              </div>
            }
          </li>
        </ul>
      </nav>
    </div>
  );
}
