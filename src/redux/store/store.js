import { configureStore } from '@reduxjs/toolkit';
import { contacts } from '../contacts/contacts-reducer';
import { filter } from '../filter/filter-reducer';
import { authReducer } from 'redux/auth';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    contacts,
    filter,
    auth: persistReducer(authPersistConfig, authReducer.auth),
  },
});

export const persistor = persistStore(store);
