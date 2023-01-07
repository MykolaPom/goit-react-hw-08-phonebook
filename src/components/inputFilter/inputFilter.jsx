import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/filter/filterSelector';
import { Input } from './inputFilter.styled';
import { filterContacts } from 'redux/filter/filterSlice';

export const InputFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);
  console.log(filter);
  const normolizeFilter = filter.toLowerCase();
  const visibleContacts = data.filter(contact =>
    contact.name.toLowerCase().includes(normolizeFilter)
  );


  const handleChange = e => {
    dispatch(filterContacts(e.currentTarget.value));
  };

  return (
    <label title="Find contacts by name">
      <Input
        type="text"
        name="filter"
        placeholder="Find contact"
        onChange={handleChange}
        value={filter}
      />
    </label>
  );
};
