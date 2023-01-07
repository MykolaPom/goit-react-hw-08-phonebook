import { MainContainer } from 'components/Main/Main';

import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { selectItems } from 'redux/contacts/contactSelectors';
import { fetchContacts } from 'redux/contacts/operations';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const data = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <MainContainer title="Phonebook">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <div>{data && 'Phonebook is empty...'}</div>
      <ContactList name="Contacts" />
    </MainContainer>
  );
}
