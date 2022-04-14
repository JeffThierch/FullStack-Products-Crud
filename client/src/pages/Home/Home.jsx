import React, { useContext } from 'react';
import AddProductForm from '../../components/AddProductForm/AddProductForm';
import EditProductForm from '../../components/EditProductForm/EditProductForm';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import AplicationContext from '../../context/AplicationContext';
import style from './Home.module.css';

export default function Home() {
  const { isEditMode } = useContext(AplicationContext);
  return (
    <>
      <Header />
      <main className={`${style.mainContainer}`}>
        {isEditMode ? <EditProductForm /> : <AddProductForm /> }
        <Table />
      </main>
    </>
  );
}
