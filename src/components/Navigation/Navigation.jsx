import s from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';
import UserMenu from 'components/UserMenu';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Navigation = props => {
  const defineLinkClass = ({ isActive }) => (isActive ? s.active : s.link);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav className={s.navigation}>
      {isLoggedIn && (
        <NavLink className={defineLinkClass} to="/">
          Contacts
        </NavLink>
      )}

      <div className={s.userMenu}>
        <UserMenu />
      </div>
    </nav>
  );
};

export default Navigation;
