import React from 'react';
import AddProductForm from '../components/AddProductForm/AddProductForm';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <AddProductForm />
        <Table />
      </main>
    </>
  );
}
