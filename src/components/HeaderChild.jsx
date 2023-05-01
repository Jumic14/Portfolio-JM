import { Link } from 'react-router-dom' 
import logo from './../assets/images/logo.png';
import '../styles/Header.css'

export default function Header() {
    return (
        <div className="header">
            <img src={logo} className="header-logo" alt="logo" />
            <nav className="header-nav">
                <ul>
                    <li>
                        { <Link to="/Home">Accueil</Link> }
                    </li>
                    <li>
                        { <Link to="/About">A propos</Link> }
                    </li>
                </ul>
            </nav>
        </div>
    )
}