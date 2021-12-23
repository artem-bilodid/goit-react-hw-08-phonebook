import s from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const Navigation = props => {
  const defineLinkClass = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <nav className={s.navigation}>
      <NavLink className={defineLinkClass} to="/">
        Contacts
      </NavLink>
      <NavLink className={defineLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={defineLinkClass} to="/login">
        Login
      </NavLink>
    </nav>
  );
};

export default Navigation;
