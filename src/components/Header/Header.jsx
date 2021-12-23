import s from './Header.module.scss';

const Header = ({ children }) => {
  return <header className={s.header}>{children}</header>;
};

export default Header;
