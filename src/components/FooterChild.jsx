import { Link } from "react-router-dom";
import "../styles/Footer.css";

export default function FooterChild() {
  return (
    <div className="footer">
      {
        <Link className="footer-link" to="/Home">
          <span>JM</span>
        </Link>
      }
      <span className="footer-txt">© Julien MICHEL - 2023</span>
      <div className="footer-icons">
        {
          <Link to="https://github.com/Jumic14">
            <i className="fa-brands fa-github" style={{ color: "white" }}></i>
          </Link>
        }
        {
          <Link to="https://www.linkedin.com/in/jumic/">
            <i className="fa-brands fa-linkedin" style={{ color: "white" }} />
          </Link>
        }
      </div>
    </div>
  );
}
