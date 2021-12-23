import s from './Contacts.module.scss';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Container from 'components/Container';
import Card from 'components/Card';
import { contactsSelectors, contactsOperations } from 'redux/contacts';

const Contacts = props => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const filteredContacts = useSelector(contactsSelectors.getFilteredContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);
  const isInvalidated = useSelector(contactsSelectors.getInvalidated);

  useEffect(() => {
    if (isInvalidated) {
      dispatch(contactsOperations.getContacts());
    }
  }, [isInvalidated, dispatch]);

  const handleDeleteContact = event => {
    const { id } = event.target;
    dispatch(contactsOperations.deleteContact(id));
  };

  const handleAddContact = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in the contacts`);
      return;
    }
    dispatch(contactsOperations.addContact(name, number));
  };
  return (
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
          <p>Loading...</p>
        ) : (
          <ContactList contacts={filteredContacts} handleDelete={handleDeleteContact} />
        )}
      </Card>
    </Container>
  );
};

export default Contacts;
