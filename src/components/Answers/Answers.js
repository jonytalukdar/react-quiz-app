import React from 'react';
import Answer from '../Answer/Answer';
import styles from './Answers.module.css';

const Answers = () => {
  return (
    <div className={styles.answers}>
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option2" text="A New Hope" />
      <Answer type="checkbox" id="option3" text="A New Hope" />
      <Answer type="checkbox" id="option4" text="A New Hope" />
      <Answer type="checkbox" id="option5" text="A New Hope" />
      <Answer type="checkbox" id="option6" text="A New Hope" />
      <Answer type="checkbox" id="option7" text="A New Hope" />
      <Answer type="checkbox" id="option8" text="A New Hope" />
      <Answer type="checkbox" id="option9" text="A New Hope" />
      <Answer type="checkbox" id="option10" text="A New Hope" />
    </div>
  );
};

export default Answers;
