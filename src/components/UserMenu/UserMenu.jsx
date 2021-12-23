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
  const { name } = useSelector(authSelectors.getUser);

  useEffect(() => {
    if (token) authOperations.setToken(token);
  }, [token]);

  useEffect(() => {
    if (token && !isLoggedIn) dispatch(authOperations.getCurrentUser());
  }, [isLoggedIn, token, dispatch]);

  const performLogout = () => {
    dispatch(authOperations.logout());
  };

  return (
    <>
      {isLoggedIn ? (
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
