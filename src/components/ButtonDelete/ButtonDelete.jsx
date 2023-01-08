import PropTypes from 'prop-types';
import { deleteContact } from 'redux/contacts/contactOperations';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { ButtonDeleteStyled } from './ButtonDelete.styled';
import { selectLoading } from 'redux/contacts/contactSelectors'; 

import {FaTrash} from "react-icons/fa"

export const ButtonDelete = ({ id }) => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  console.log(isLoading)

  return (
    <ButtonDeleteStyled
      type="button"
      name="Delete"
      id={id}
      onClick={() => dispatch(deleteContact(id))}
      disabled={isLoading}
    >
      <FaTrash />
    </ButtonDeleteStyled>
  );
};

ButtonDelete.propTypes = {
  id: PropTypes.string.isRequired,
};
