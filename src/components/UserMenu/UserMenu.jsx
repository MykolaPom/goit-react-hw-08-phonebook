import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { Wrapper, ButtonLogOut } from './UserMenu.styled';

import { FaUserCircle } from 'react-icons/fa';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <p>
        Welcome, {' '}
        <span>
          <FaUserCircle />
        </span>{' '}
        <span>{user.name}</span>
      </p>
      <ButtonLogOut type="button" onClick={handleLogOut}>
        Logout
      </ButtonLogOut>
    </Wrapper>
  );
};
