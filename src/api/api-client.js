import API_CONST from './api-const';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const {
  BASE_URL,
  SIGNUP_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  CURRENT_USER_ENDPOINT,
  CONTACTS_ENDPOINT,
} = API_CONST;

const token = useSelector(authSelectors.)

export const signup = async (name, email, password) => {
  try {
    const response = await fetch(`${BASE_URL}/${SIGNUP_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
};

export const login = async (name, password) => {
  try {
    const response = await fetch(`${BASE_URL}/${LOGIN_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${LOGOUT_ENDPOINT}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${CURRENT_USER_ENDPOINT}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    const contacts = await response.json();
    return contacts;
  } catch (error) {
    throw new Error(error);
  }
};

export const addContact = async (name, number) => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify({ name, number }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) throw new Error(response.statusText);
    const newContact = await response.json();
    return newContact;
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteContact = async id => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error(response.statusText);
    const deletedContact = await response.json();
    return deletedContact;
  } catch (error) {
    throw new Error(error);
  }
};
