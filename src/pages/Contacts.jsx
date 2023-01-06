import { MainContainer } from 'components/Main/Main';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';

import { fetchContacts } from 'redux/tasks/operations';

export default function ContactsPage() {
    const data = useSelector(state => state.contacts.items);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);

    return (
      <MainContainer title="Phonebook">
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>

        {data.length > 0 ? (
        <ContactList name="Contacts" />) : (
        <p>Phonebook is empty</p>
      )}
      </MainContainer>
    );
}

