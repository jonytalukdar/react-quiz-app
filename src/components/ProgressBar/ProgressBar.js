import React from 'react';
import Button from '../Button/Button';
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton}>
        <span class="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}>24% Cimplete!</div>
        <div className={styles.rangeBody}>
          <div className={styles.progress} style={{ width: '20%' }}></div>
        </div>
      </div>
      <a href="result.html">
        <Button>
          <span>Next Question</span>
          <span class="material-icons-outlined"> arrow_forward </span>
        </Button>
      </a>
    </div>
  );
};

export default ProgressBar;
