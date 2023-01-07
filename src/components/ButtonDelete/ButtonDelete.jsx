// import { useDeleteContactMutation } from 'redux/contactsApi';

import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ButtonDeleteStyled } from './ButtonDelete.styled';

export const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.contacts.isLoading);
  // const [deleteContact, { isLoading }] = useDeleteContactMutation();
  // console.log(isLoading);

  return (
    <ButtonDeleteStyled
      type="button"
      name="Delete"
      id={id}
      onClick={() => dispatch(deleteContact(id))}
      disabled={isLoading}
    >
      {isLoading ? 'Deleting...' : 'Delete'}
    </ButtonDeleteStyled>
  );
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
