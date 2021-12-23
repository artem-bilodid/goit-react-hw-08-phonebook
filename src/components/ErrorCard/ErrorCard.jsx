import s from './ErrorCard.module.scss';
import Card from 'components/Card';

const ErrorCard = ({ error }) => {
  return (
    <div>
      <h2>Error</h2>
      <div className={s.card}>
        <code>{error}</code>
      </div>
    </div>
  );
};

export default ErrorCard;
