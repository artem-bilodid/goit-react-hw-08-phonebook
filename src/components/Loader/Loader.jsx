import s from './Loader.module.scss';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loader = () => {
  const override = `
    display: block;
    margin: 0 auto;
  `;

  return (
    <div className={s.loaderContainer}>
      <PropagateLoader color="#71b6f9" loading={true} css={override} size={15} />
    </div>
  );
};

export default Loader;
