import React from 'react';
import styles from './Textarea.module.css';

const Textarea = ({ type, placeholder, text, value, onChange }) => {
  return (
    <div className={styles.textInput}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="material-icons-outlined"> {text} </span>
    </div>
  );
};

export default Textarea;
