import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations'; // attention
import { Wrapper, ButtonLogOut } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <p>Welcome, {user.name}</p>
      <ButtonLogOut type="button" onClick={handleLogOut}>
        Logout
      </ButtonLogOut>
    </Wrapper>
  );
};
