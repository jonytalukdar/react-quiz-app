import React from 'react';
import Video from '../Video/Video';
import styles from './Videos.module.css';
import { Link } from 'react-router-dom';

const Videos = () => {
  return (
    <div className={styles.videos}>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
      <Link to="/quiz">
        <Video />
      </Link>
    </div>
  );
};

export default Videos;
