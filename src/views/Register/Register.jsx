import s from './Register.module.scss';
import Container from 'components/Container';
import Card from 'components/Card';
import RegisterForm from 'components/RegisterForm';

const Register = props => {
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
