// import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';

import toast, { Toaster } from 'react-hot-toast';
import { selectItems } from 'redux/contacts/contactSelectors';
import { selectLoading } from 'redux/contacts/contactSelectors';

import { Form, Input, Paragraph, ButtonSubmit } from './ContactForm.styled';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);
  const isLoading = useSelector(selectLoading);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setNumber(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  const formSubmitHandle = data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      toast.error(`${name} is already exists`);
      return;
    }
    dispatch(addContact(data));
  };

  const clickOnBtnSubmit = e => {
    e.preventDefault();
    formSubmitHandle({ name, number });
    reset();
  };

  return (
    <Form onSubmit={clickOnBtnSubmit}>
      <label title="Name">
        <Paragraph>Name</Paragraph>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          onChange={handleChange}
          value={name}
        />
      </label>
      <label title="Number">
        <Paragraph>Number</Paragraph>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="123-45-67"
          onChange={handleChange}
          value={number}
        />
      </label>
      <ButtonSubmit type="submit" disabled={isLoading}>
        Add contact
      </ButtonSubmit>
      <Toaster position="top-right" />
    </Form>
  );
};
