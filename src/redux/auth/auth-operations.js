import * as API from 'api/api-client';
import { authActions } from '.';

export const setToken = token => {
  API.setToken(token);
};

export const login =
  ({ email, password }) =>
  async dispatch => {
    dispatch(authActions.loginRequest());
    try {
      const { user, token } = await API.login({ email, password });
      dispatch(authActions.loginSuccess({ user, token }));
    } catch (error) {
      dispatch(authActions.loginError(error.message));
    }
  };

export const signup =
  ({ name, email, password }) =>
  async dispatch => {
    dispatch(authActions.signupRequest());
    try {
      const { user, token } = await API.signup({ name, email, password });
      dispatch(authActions.signupSuccess({ user, token }));
    } catch (error) {
      dispatch(authActions.signupError(error.message));
    }
  };

export const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest());
  try {
    await API.logout();
    dispatch(authActions.logoutSuccess());
  } catch (error) {
    dispatch(authActions.logoutError(error.message));
  }
};

export const getCurrentUser = () => async dispatch => {
  dispatch(authActions.getCurrentUserRequest());
  try {
    const user = await API.getCurrentUser();
    dispatch(authActions.getCurrentUserSuccess({ user }));
  } catch (error) {
    dispatch(authActions.getCurrentUserError(error.message));
  }
};
