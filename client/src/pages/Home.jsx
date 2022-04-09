import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../components/Header/Header';
import { requestProductsFromApi } from '../redux/actions';

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProductsFromApi());
  }, [dispatch]);

  const productsData = useSelector((state) => state.dataReducer.products);

  return (
    <>
      <Header />
      <main>
        <section>
          {productsData.map((product) => (
            <section key={product.id}>
              <h2>{product.name}</h2>
              <p>{`Code: ${product.code}`}</p>
              <p>{`Active: ${product.is_active}`}</p>
            </section>
          ))}
        </section>
      </main>
    </>
  );
}
