import s from './Card.module.scss';

const Card = ({ children }) => {
  return <div className={s.card}>{children}</div>;
};

export default Card;
