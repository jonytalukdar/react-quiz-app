import React from 'react';
import Answer from '../Answer/Answer';
import styles from './Answers.module.css';

const Answers = () => {
  return (
    <div className={styles.answers}>
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
      <Answer type="checkbox" id="option1" text="A New Hope" />
    </div>
  );
};

export default Answers;
