import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Container from 'components/Container';
import Card from 'components/Card';
import LoginForm from 'components/LoginForm';

const Login = props => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate('/', { replace: true });
  }, [navigate, isLoggedIn]);

  return (
    <Container>
      <h1>Login</h1>
      <Card>
        <LoginForm />
      </Card>
    </Container>
  );
};

export default Login;
