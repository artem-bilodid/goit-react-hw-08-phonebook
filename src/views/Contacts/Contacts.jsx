import s from './Contacts.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Card from 'components/Card';
import Loader from 'components/Loader';
import { contactsSelectors, contactsOperations } from 'redux/contacts';
import { authSelectors, authOperations } from 'redux/auth';

const Contacts = props => {
  const dispatch = useDispatch();
  const token = useSelector(authSelectors.getToken);
  const contacts = useSelector(contactsSelectors.getContacts);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const isInvalidated = useSelector(contactsSelectors.getInvalidated);
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isCurrentUserRetreived = useSelector(authSelectors.getIsCurrentUserRetreived);

  useEffect(() => {
    if (token) authOperations.setToken(token);
  }, [token]);

  useEffect(() => {
    if (isInvalidated && token) {
      dispatch(contactsOperations.getContacts());
    }
  }, [isInvalidated, token, dispatch]);

  const handleDeleteContact = event => {
    const { id } = event.target;
    dispatch(contactsOperations.deleteContact(id));
  };

  const handleAddContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in the contacts`);
      return;
    }
    dispatch(contactsOperations.addContact({ name, number }));
  };
  return (
    <>
      {isLoggedIn && isCurrentUserRetreived ? (
        <Container>
          <h1>Phonebook</h1>
          <Card>
            <ContactForm onSubmit={handleAddContact} />
          </Card>

          <h2>Contacts</h2>
          <div className={s.filterCard}>
            <Card>
              <Filter />
            </Card>
          </div>
          <Card>
            {isLoading ? (
              <Loader />
            ) : (
              <ContactList contacts={filteredContacts} handleDelete={handleDeleteContact} />
            )}
          </Card>
        </Container>
      ) : (
        <Navigate to="/login" replace={true} />
      )}
    </>
  );
};

export default Contacts;
