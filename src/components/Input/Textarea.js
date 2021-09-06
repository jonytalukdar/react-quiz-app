import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({ type, placeholder, text }) => {
  return (
    <div className={styles.textInput}>
      <input type={type} placeholder={placeholder} />
      <span class="material-icons-outlined"> {text} </span>
    </div>
  );
};

export default Textarea;
