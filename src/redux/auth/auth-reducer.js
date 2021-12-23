import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as authActions from './auth-actions';
const EMPTY_USER = { name: null, email: null };

const user = createReducer(EMPTY_USER, {
  [authActions.signupSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => EMPTY_USER,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.signupSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [authActions.signupSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
});

const isFetchingCurrentUser = createReducer(false, {
  [authActions.getCurrentUserRequest]: () => true,
  [authActions.getCurrentUserSuccess]: () => false,
});

const error = createReducer(null, {
  [authActions.signupRequest]: () => null,
  [authActions.loginRequest]: () => null,
  [authActions.getCurrentUserRequest]: () => null,
  [authActions.logoutRequest]: () => null,
  [authActions.clearError]: () => null,
  [authActions.signupError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
  [authActions.getCurrentUserError]: (_, { payload }) => payload,
  [authActions.logoutError]: (_, { payload }) => payload,
});

export const auth = combineReducers({
  user,
  token,
  isLoggedIn,
  isFetchingCurrentUser,
  error,
});
