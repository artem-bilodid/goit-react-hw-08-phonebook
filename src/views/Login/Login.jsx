import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Container from 'components/Container';
import Card from 'components/Card';
import LoginForm from 'components/LoginForm';

const Login = props => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isCurrentUserRetreived = useSelector(authSelectors.getIsCurrentUserRetreived);

  return (
    <>
      {isLoggedIn && isCurrentUserRetreived ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Container>
          <h1>Login</h1>
          <Card>
            <LoginForm />
          </Card>
        </Container>
      )}
    </>
  );
};

export default Login;
