import { Link } from 'react-router-dom' 
import '../styles/Footer.css'

export default function FooterChild() {
    return (
        <div className="footer">
             { <Link to="/Home"><span>JM</span></Link> }
            <span className="footer-txt" >© 2023 Julien MICHEL.</span>
            { <Link to="https://github.com/Jumic14"><i class="fa-brands fa-github" /></Link> } 
            { <Link to="https://www.linkedin.com/in/jumic/"><i class="fa-brands fa-linkedin" /></Link> } 
            
        </div>
    )
}