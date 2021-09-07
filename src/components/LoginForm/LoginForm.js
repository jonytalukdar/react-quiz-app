import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import Textarea from '../Input/Textarea';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (email && password) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [email, password]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);
      setEmail('');
      setPassword('');
      history.push('/quiz');
    } catch (error) {
      setError('Email And Password Doesnt match');
      console.log(error);
    }
    console.log('login success');
  };

  return (
    <form
      className={`${styles.login} ${styles.form}`}
      action="#"
      onSubmit={handleLogin}
    >
      <Textarea
        type="email"
        placeholder="Enter Email"
        text="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textarea
        type="password"
        placeholder="Enter Password"
        text="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <Button disabled={!formIsValid} type="submit">
        Login
      </Button>

      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
};

export default LoginForm;
