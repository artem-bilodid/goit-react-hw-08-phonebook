import API_CONST from './api-const';

const {
  BASE_URL,
  SIGNUP_ENDPOINT,
  LOGIN_ENDPOINT,
  LOGOUT_ENDPOINT,
  CURRENT_USER_ENDPOINT,
  CONTACTS_ENDPOINT,
} = API_CONST;

export let token = '';

export const setToken = newToken => {
  token = newToken;
};

export const signup = async ({ name, email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/${SIGNUP_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      const message = await response.json();
      if (message.code === 11000) {
        throw new Error(
          `User with Email '${email}' already exists. Please try another Email address`,
        );
      }
      throw new Error(`Cannot register a user due to an error. Please try again later`);
    }
    const authInfo = await response.json();
    return authInfo;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const login = async ({ email, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/${LOGIN_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (!response.ok) {
      throw new Error('Incorrect Email or Password');
    }
    const authInfo = await response.json();
    return authInfo;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${LOGOUT_ENDPOINT}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Unexpected Error happened');
    }
    const authInfo = await response.json();
    return authInfo;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${CURRENT_USER_ENDPOINT}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Unexpected error happened');
    }
    const userInfo = await response.json();
    return userInfo;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const getContacts = async () => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Unexpected error happened');
    }
    const newContact = await response.json();
    return newContact;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const addContact = async ({ name, number }) => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}`, {
      method: 'POST',
      body: JSON.stringify({ name, number }),
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Unexpected error happened');
    }
    const newContact = await response.json();
    return newContact;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const deleteContact = async id => {
  try {
    const response = await fetch(`${BASE_URL}/${CONTACTS_ENDPOINT}/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Unexpected error happened');
    }
    const deletedContact = await response.json();
    return deletedContact;
  } catch (error) {
    throw new Error(error.message);
  }
};
