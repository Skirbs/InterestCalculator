import style from "./Card.module.css";

const Card = (props) => {
  return <div className={`${style.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
