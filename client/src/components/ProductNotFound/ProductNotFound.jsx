import React from 'react';
import style from './ProductNotFound.module.css';

export default function ProductNotFound() {
  return (
    <section className={`${style.notFoundContainer}`}>
      <h1>No products registered</h1>
    </section>
  );
}
