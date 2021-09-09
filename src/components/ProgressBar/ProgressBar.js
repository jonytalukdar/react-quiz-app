import React from 'react';

import Button from '../Button/Button';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ next, prev, progress, submit }) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.backButton} onClick={prev}>
        <span className="material-icons-outlined"> arrow_back </span>
      </div>
      <div className={styles.rangeArea}>
        <div className={styles.tooltip}> Cimplete!</div>
        <div className={styles.rangeBody}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <Button onClick={progress === 100 ? submit : next}>
        {progress === 100 ? (
          'Submit'
        ) : (
          <>
            <span>Next Question</span>
            <span className="material-icons-outlined"> arrow_forward </span>
          </>
        )}
      </Button>
    </div>
  );
};

export default ProgressBar;
