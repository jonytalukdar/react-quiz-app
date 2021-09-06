import React from 'react';
import styles from './Summary.module.css';
import success from '../../assets/Images/success.png';

const Summary = () => {
  return (
    <div class={styles.summary}>
      <div class={styles.point}>
        {/* <!-- progress bar will be placed here --> */}
        <p class={styles.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div class={styles.badge}>
        <img src={success} alt="Success" />
      </div>
    </div>
  );
};

export default Summary;
