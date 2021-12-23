import s from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';

const Navigation = props => {
  const defineLinkClass = ({ isActive }) => (isActive ? s.active : s.link);

  return (
    <nav className={s.navigation}>
      <NavLink className={defineLinkClass} to="/">
        Contacts
      </NavLink>
      <div className={s.userMenu}>
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navigation;
