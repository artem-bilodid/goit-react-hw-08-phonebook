import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Container from 'components/Container';
import Card from 'components/Card';
import RegisterForm from 'components/RegisterForm';

const Register = props => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate('/', { replace: true });
  }, [navigate, isLoggedIn]);

  return (
    <Container>
      <h1>Register</h1>
      <Card>
        <RegisterForm />
      </Card>
    </Container>
  );
};

export default Register;
