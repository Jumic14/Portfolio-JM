import "../styles/Card.css";
import { Link } from "react-router-dom";

export default function Card({ props }) {
  return (
    <div className="cards-container">
      {props.map((prop) => (
        <div className="card" key={prop.id}>
          {
            <Link to={"/Works/" + prop.id}>
              <div
                style={{ backgroundImage: `url(${prop.cover})` }}
                className="card-img"
              ></div>
              <span className="card-text">{prop.title}</span>
            </Link>
          }
        </div>
      ))}
    </div>
  );
}
