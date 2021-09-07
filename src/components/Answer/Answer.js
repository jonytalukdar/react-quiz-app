import React from 'react';
import styles from './Answer.module.css';

const Answer = ({ type, id, text }) => {
  return (
    <label className={styles.answer} htmlFor={id}>
      <input type={type} id={id} /> {text}
    </label>
  );
};

export default Answer;
