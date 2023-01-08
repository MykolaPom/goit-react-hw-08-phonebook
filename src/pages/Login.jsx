import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import {Wrapper} from './styled/Login.styled'

export default function Login() {
  return (
    <Wrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Wrapper>
  );
}
