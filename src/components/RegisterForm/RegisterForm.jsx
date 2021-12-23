import s from './RegisterForm.module.scss';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const resetFieldsToDefault = () => {
    setEmail('');
    setName('');
    setPassword('');
  };

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'name':
        setName(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        throw new Error(`Unsupported text field ${name}`);
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    dispatch(authOperations.signup({ name, email, password }));

    resetFieldsToDefault();
  };

  return (
    <div>
      <form className={s.form} onSubmit={handleSubmit}>
        <label className={s.label}>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} required />
        </label>
        <label className={s.label}>
          Email
          <input type="email" name="email" value={email} onChange={handleChange} required />
        </label>
        <label className={s.label}>
          Password
          <input
            type="password"
            name="password"
            pattern="^.{7,}$"
            title="Минимальная длина пароля 7 символов"
            value={password}
            onChange={handleChange}
            required
          />
        </label>
        <button className={s.button} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
