import React from 'react';
import Answers from '../Answers/Answers';
import styles from './Question.module.css';

const Question = () => {
  return (
    <div class={styles.question}>
      <div class={styles.qtitle}>
        <span class="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>

      <Answers />
    </div>
  );
};

export default Question;
