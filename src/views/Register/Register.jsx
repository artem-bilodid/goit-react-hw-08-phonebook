import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Container from 'components/Container';
import Card from 'components/Card';
import RegisterForm from 'components/RegisterForm';

const Register = props => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isCurrentUserRetreived = useSelector(authSelectors.getIsCurrentUserRetreived);

  return (
    <>
      {isLoggedIn && isCurrentUserRetreived ? (
        <Navigate to="/" replace={true} />
      ) : (
        <Container>
          <h1>Register</h1>
          <Card>
            <RegisterForm />
          </Card>
        </Container>
      )}
    </>
  );
};

export default Register;
