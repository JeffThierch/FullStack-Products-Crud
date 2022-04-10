import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={`${styles.headerContainer}`}>
      <nav className={`${styles.navContainer}`}>
        <ul className={`${styles.listContainer}`}>
          <Link to="/">
            <li>Products</li>
          </Link>
          <Link to="/categories">
            <li>Categories</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
