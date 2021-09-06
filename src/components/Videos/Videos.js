import React from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.css';

const Videos = () => {
  return (
    <div className={styles.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
};

export default Videos;
