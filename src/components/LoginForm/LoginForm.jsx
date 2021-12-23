import s from './LoginForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetFieldsToDefault = () => {
    setEmail('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error(`Unsupported text field ${name}`);
    }
  };

  const performLogin = async event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(authOperations.login({ email, password }));

    resetFieldsToDefault();
  };

  return (
    <div>
      <form className={s.form} onSubmit={performLogin}>
        <label className={s.label}>
          Email
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <button className={s.button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
