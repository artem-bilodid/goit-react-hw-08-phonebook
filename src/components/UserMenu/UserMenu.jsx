import s from './UserMenu.module.scss';
import { NavLink } from 'react-router-dom';

const UserMenu = props => {
  const defineLinkClass = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <>
      <NavLink className={defineLinkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={defineLinkClass} to="/login">
        Login
      </NavLink>
    </>
  );
};

export default UserMenu;
