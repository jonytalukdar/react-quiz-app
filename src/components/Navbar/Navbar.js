import React from 'react';
import Account from './Account';
import logo from '../../assets/Images/logo-bg.png';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="index.html" className={styles.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Quiz App</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
};

export default Navbar;
