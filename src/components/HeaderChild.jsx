import { Link } from 'react-router-dom' 
import logo from './../assets/images/logo.png';
import '../styles/Header.css'

export default function HeaderChild() {
    return (
        <div className="header">
            <div className="header-logo">
            { <Link to="/Home"><img src={logo} className="logo" alt="logo" /></Link> }
            </div>
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