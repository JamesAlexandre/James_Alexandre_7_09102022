import CardCSS from "../style/Card.module.css";


const Card = ({logement}) => {
  return (
    <li className={CardCSS.card}>
      <img src={logement.cover} alt={logement.title} />
      <h3>{logement.title}</h3>
    </li>
  );
};

export default Card;
