import s from './UserMenu.module.scss';

import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const UserMenu = props => {
  const defineLinkClass = ({ isActive }) => (isActive ? s.active : s.link);
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isCurrentUserRetreived = useSelector(authSelectors.getIsCurrentUserRetreived);
  const { name } = useSelector(authSelectors.getUser);

  useEffect(() => {
    if (token) authOperations.setToken(token);
  }, [token]);

  const performLogout = () => {
    dispatch(authOperations.logout());
  };

  return (
    <>
      {isLoggedIn && isCurrentUserRetreived ? (
        <>
          <h3 className={s.name}>{name}</h3>
          <button className={s.logout} type="button" onClick={performLogout}>
            Logout
          </button>
        </>
      ) : (
        <>
          <NavLink className={defineLinkClass} to="/register">
            Register
          </NavLink>
          <NavLink className={defineLinkClass} to="/login">
            Login
          </NavLink>
        </>
      )}
    </>
  );
};

export default UserMenu;
