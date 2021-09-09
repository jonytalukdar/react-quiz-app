import React from 'react';
import styles from './Answers.module.css';
import Checkbox from '../Checkbox/CheckBox';

export default function Answers({ options = [], handleChange }) {
  return (
    <div className={styles.answers}>
      {options.map((option, index) => (
        <Checkbox
          type="checkbox"
          key={index}
          className={styles.answer}
          text={option.title}
          value={index}
          checked={option.checked}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
}
