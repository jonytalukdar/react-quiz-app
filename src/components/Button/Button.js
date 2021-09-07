import React from 'react';
import styles from './Button.module.css';

const Button = (props) => {
  return (
    <button disabled={props.disabled} className={styles.button}>
      {props.children}
    </button>
  );
};

export default Button;
