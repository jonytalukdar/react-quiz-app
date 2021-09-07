import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import Button from '../Button/Button';
import CheckBox from '../Checkbox/CheckBox';
import Textarea from '../Input/Textarea';
import styles from './Form.module.css';

const Form = () => {
  const { signup } = useContext(AuthContext);

  const history = useHistory();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    if (userName && email && password && confirmPassword && agree) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [userName, email, password, confirmPassword, agree]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Password Dont Match');
    }

    try {
      setUserName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setAgree(false);
      setError('');

      signup(userName, email, password);
      history.push('/');
    } catch (error) {
      console.log(error);
      setError('Failed TO create accound');
    }
  };

  return (
    <form
      className={`${styles.signup} ${styles.form}`}
      action="#"
      onSubmit={handleSubmit}
    >
      <Textarea
        type="text"
        placeholder="Enter Name"
        text="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
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
      <Textarea
        type="password"
        placeholder="Confirm Password"
        text="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <CheckBox
        type="checkbox"
        value={agree}
        checked={agree}
        onChange={(e) => setAgree(!agree)}
      />

      <Button disabled={!formIsValid} type="submit">
        Submit Now
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default Form;
