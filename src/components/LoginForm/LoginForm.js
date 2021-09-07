import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import Textarea from '../Input/Textarea';
import styles from './LoginForm.module.css';

const LoginForm = () => {
  return (
    <form class={`${styles.login} ${styles.form}`} action="#">
      <Textarea type="email" placeholder="Enter Email" text="alternate_email" />
      <Textarea type="password" placeholder="Enter Password" text="lock" />

      <Button>Login</Button>

      <div class="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
};

export default LoginForm;
