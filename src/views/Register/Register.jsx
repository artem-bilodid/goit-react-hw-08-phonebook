import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authActions } from 'redux/auth';
import Container from 'components/Container';
import Card from 'components/Card';
import ErrorCard from 'components/ErrorCard/ErrorCard';

import RegisterForm from 'components/RegisterForm';

const Register = props => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const error = useSelector(authSelectors.getError);

  useEffect(() => dispatch(authActions.clearError()), [dispatch]);

  useEffect(() => {
    if (isLoggedIn) navigate('/', { replace: true });
  }, [navigate, isLoggedIn]);

  return (
    <Container>
      <h1>Register</h1>
      <Card>
        <RegisterForm />
      </Card>
      {error && <ErrorCard error={error} />}
    </Container>
  );
};

export default Register;
