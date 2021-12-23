import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';

import * as authActions from './auth-actions';
const EMPTY_USER = { name: null, email: null };

const user = createReducer(EMPTY_USER, {
  [authActions.signupSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => EMPTY_USER,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
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

const isCurrentUserRetreived = createReducer(false, {
  [authActions.getCurrentUserSuccess]: () => true,
  [authActions.signupSuccess]: () => true,
  [authActions.loginSuccess]: () => true,
  [authActions.logoutSuccess]: () => false,
});

export const auth = combineReducers({
  user,
  token,
  isLoggedIn,
  isCurrentUserRetreived,
});
