import { PropTypes } from 'prop-types';

import { ContactsItem, Input } from './ContactList.styled';
// // import { useGetContactsQuery } from 'redux/contactsApi';
// // import { useDeleteContactMutation } from 'redux/contactsApi';
import { useSelector, useDispatch } from 'react-redux';

import { filterContacts } from 'redux/filter/filterSlice';

import { ButtonDelete } from 'components/ButtonDelete/ButtonDelete';

export const ContactList = () => {
  // const { data } = useGetContactsQuery();
  const { data } = useSelector(state => state.contacts.items);
  // console.log('data', data);
  // console.log('error', error);
  // console.log('isLoading', isLoading);

  const filter = useSelector(state => state.filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );

  // const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // console.log(isLoading);

  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <ContactsItem>
      {/* <p>{name}</p> */}
      <label title="Find contacts by name">
        <Input
          type="text"
          name="filter"
          placeholder="Find contact"
          onChange={handleChange}
          value={filter}
        />
      </label>
      <ul>
        {visibleContacts.map(data => (
          <li key={data.id}>
            <span>
              {data.name}: {data.number}
            </span>
            <ButtonDelete id={data.id} />
          </li>
        ))}
      </ul>
    </ContactsItem>
  );
};

ContactList.propTypes = {
  name: PropTypes.string.isRequired,
};
