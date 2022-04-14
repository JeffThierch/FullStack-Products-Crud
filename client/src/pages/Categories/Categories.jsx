import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddCategorieForm from '../../components/AddCategorieForm/AddCategorieForm';
import CategoriesNotFound from '../../components/CategoriesNotFound/CategoriesNotFound';
import Header from '../../components/Header/Header';
import { requestCategoriesFromApi } from '../../redux/actions';
import style from './Categories.module.css';

export default function Categories() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCategoriesFromApi());
  });

  const categories = useSelector((state) => state.dataReducer.categories);

  return (
    <>
      <Header />
      <main className={`${style.mainContainer}`}>
        <AddCategorieForm />
        <section className={`${style.categorieContainer}`}>
          {!categories.length ? (<CategoriesNotFound />) : (
            categories.map((category) => (
              <section key={category.id} className={`${style.categorieCard}`}>
                <h2>{category.name}</h2>
                <p>{`Qnt of products: ${category.products.length}`}</p>
              </section>
            ))
          )}
        </section>
      </main>
    </>
  );
}
