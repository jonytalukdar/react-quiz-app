import React from 'react';
import styles from './Video.module.css';
import img from '../../assets/Images/3.jpg';

const Video = ({ video }) => {
  const { title, youtubeID, noq } = video;
  return (
    <>
      <div className={styles.video}>
        <img
          src={`http://img.youtube.com/vi/${youtubeID}/maxresdefault.jpg`}
          alt=""
        />
        <p>{title}</p>
        <div className={styles.qmeta}>
          <p>{noq} Questions</p>
          <p>Total Score : {noq * 5}</p>
        </div>
      </div>
    </>
  );
};

export default Video;
