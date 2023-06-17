import { Link } from 'react-router-dom' 
import '../styles/Header.css'

export default function HeaderChild() {
    return (
        <div className="header">
            <div className="header-home"> 
            { <Link to="/Home"><span>JM</span></Link> }
            </div>
            <nav className="header-nav">
                <ul>
                    <li>
                        { <Link to="/Home">Accueil</Link> }
                    </li>
                    <li>
                        { <Link to="/Projects">Projets</Link> }
                    </li>
                    <li>
                        { <Link to="/About">A propos de moi</Link> }
                    </li>
                    <li>
                        { <Link to="/Contact">Contact</Link> }
                    </li>
                </ul>
            </nav>
        </div>
    )
}