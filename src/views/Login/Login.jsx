import s from './Login.module.scss';
import Container from 'components/Container';
import Card from 'components/Card';
import LoginForm from 'components/LoginForm';

const Login = props => {
  return (
    <Container>
      <h1>Login</h1>
      <Card>
        <LoginForm onSubmit={() => ({})} />
      </Card>
    </Container>
  );
};

export default Login;
