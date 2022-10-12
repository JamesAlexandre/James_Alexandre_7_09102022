import { Link } from "react-router-dom";
import CardCSS from "../style/Card.module.css";

const Card = ({ logement }) => {
  return (
    <Link to={`/logement/${logement.id}`} className={CardCSS.card}>
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
    </Link>
  );
};

export default Card;
