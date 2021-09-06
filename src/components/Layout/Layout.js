import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Layout.module.css';

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>{props.children}</div>
      </main>
    </>
  );
};

export default Layout;
