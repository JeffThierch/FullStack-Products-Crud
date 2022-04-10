import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
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
