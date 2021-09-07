import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import CheckBox from '../Checkbox/CheckBox';
import Textarea from '../Input/Textarea';
import styles from './Form.module.css';

const Form = () => {
  return (
    <form className={`${styles.signup} ${styles.form}`} action="#">
      <Textarea type="text" placeholder="Enter Name" text="person" />
      <Textarea type="email" placeholder="Enter Email" text="alternate_email" />
      <Textarea type="password" placeholder="Enter Password" text="lock" />
      <Textarea
        type="password"
        placeholder="Confirm Password"
        text="lock_clock"
      />

      <CheckBox type="checkbox" />

      <Button>Submit Not</Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </form>
  );
};

export default Form;
