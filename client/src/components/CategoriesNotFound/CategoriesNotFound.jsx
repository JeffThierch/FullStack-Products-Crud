import React from 'react';
import style from './CategoriesNotFound.module.css';

export default function CategoriesNotFound() {
  return (
    <section className={`${style.notFoundContainer}`}>
      <h1>No categories registered</h1>
    </section>
  );
}
