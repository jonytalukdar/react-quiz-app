import React from 'react';
import styles from './Illustration.module.css';
import illustraionImg from '../../assets/Images/signup.svg';

const Illustration = () => {
  return (
    <div className={styles.illustration}>
      <img src={illustraionImg} alt="Signup" />
    </div>
  );
};

export default Illustration;
