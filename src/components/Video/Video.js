import React from 'react';
import styles from './Video.module.css';
import img from '../../assets/Images/3.jpg';

const Video = () => {
  return (
    <>
      <a href="quiz.html">
        <div className={styles.video}>
          <img src={img} alt="" />
          <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
          <div className={styles.qmeta}>
            <p>10 Questions</p>
            <p>Score : Not taken yet</p>
          </div>
        </div>
      </a>
    </>
  );
};

export default Video;
