import { createAction } from '@reduxjs/toolkit';

export const clearError = createAction('auth/error/clear');
export const signupRequest = createAction('auth/signup/request');
export const signupSuccess = createAction('auth/signup/success');
export const signupError = createAction('auth/signup/error');

export const loginRequest = createAction('auth/login/request');
export const loginSuccess = createAction('auth/login/success');
export const loginError = createAction('auth/login/error');

export const logoutRequest = createAction('auth/logout/request');
export const logoutSuccess = createAction('auth/logout/success');
export const logoutError = createAction('auth/logout/error');

export const getCurrentUserRequest = createAction('auth/getCurrentUser/request');
export const getCurrentUserSuccess = createAction('auth/getCurrentUser/success');
export const getCurrentUserError = createAction('auth/getCurrentUser/error');
