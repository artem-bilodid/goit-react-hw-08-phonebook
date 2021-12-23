import { configureStore } from '@reduxjs/toolkit';
import { contacts } from '../contacts/contacts-reducer';
import { filter } from '../filter/filter-reducer';
import { authReducer } from 'redux/auth';

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    auth: authReducer.auth,
  },
});
