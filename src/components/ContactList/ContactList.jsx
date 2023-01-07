import { PropTypes } from 'prop-types';

import { ContactsItem } from './ContactList.styled';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'reacte-redux';

import { InputFilter } from 'components/inputFilter/inputFilter';
import { selectItems } from 'redux/contacts/contactSelectors';
import { selectFilter } from 'redux/filter/filterSelector';

import { ButtonDelete } from 'components/ButtonDelete/ButtonDelete';

export const ContactList = () => {
  const data = useSelector(selectItems);
  console.log('data', data);

  const filter = useSelector(selectFilter);
  console.log('filter', filter);

  const normolizeFilter = filter.toLowerCase();
  console.log('normolizeFilter', normolizeFilter);

  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );
  console.log('visibleContacts', visibleContacts);

  // const dispatch = useDispatch();
  // const handleChange = e => {
  //   dispatch(filterContacts(e.currentTarget.value));
  // };

  return (
    <ContactsItem>
      <InputFilter />

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

// {
//   /* <p>{name}</p> */
// }
// {
//   /* <label title="Find contacts by name">
//   <Input
//     type="text"
//     name="filter"
//     placeholder="Find contact"
//     onChange={handleChange}
//     value={filter}
//   />
// </label> */
// }
