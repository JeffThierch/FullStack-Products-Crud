import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import AplicationContext from '../../context/AplicationContext';
import { createNewProduct, requestCategoriesFromApi } from '../../redux/actions';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import style from './AddProductForm.module.css';

export default function AddProductForm() {
  const history = useHistory();
  const [isButtonDisabled, changeButtonStatus] = useState(true);

  const {
    productName,
    changeProductName,
    productCode,
    changeProductCode,
    productCategory,
    changeProductCategory,
  } = useContext(AplicationContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCategoriesFromApi());
  }, [dispatch]);

  const categories = useSelector((state) => state.dataReducer.categories);

  const createProduct = ({ name, code, categoryId }) => {
    dispatch(createNewProduct({ name, code, categoryId }));
  };

  const validateFields = () => {
    const errorCases = [
      productName.length === 0,
      productName.trim().length === 0,
      productCode.length === 0,
      productCode.trim().length === 0,
      !categories.length,
    ];

    const haveSomeError = errorCases.some((error) => error === true);

    changeButtonStatus(haveSomeError);
  };

  useEffect(() => {
    validateFields();
  }, [productCode, productName]);

  const redirectToCreateCategoriePage = () => {
    history.push('/categories');
  };

  return (
    <form className={`${style.formContainer}`}>
      <section className={`${style.formInputContainer}`}>
        <Input
          name="product-name-input"
          type="text"
          label="Product Name"
          value={productName}
          onChangeCb={changeProductName}
        />

        <Input
          name="product-code-input"
          type="text"
          label="Product Code"
          value={productCode}
          onChangeCb={changeProductCode}
        />

        {
       !categories.length ? (
         <Button
           className={`${style.addClassBtn}`}
           name="add_categorie"
           text="Create Categorie"
           onClickCb={redirectToCreateCategoriePage}
         />
       ) : (
         <Select
           name="category-select"
           label="Category"
           options={categories}
           onChangeCb={changeProductCategory}
         />
       )

      }

        <Button
          text="Create Product"
          className={`${style.createProductBtn}`}
          onClickCb={() => createProduct(
            { name: productName.trim(), code: productCode.trim(), categoryId: productCategory },
          )}
          isDisabled={isButtonDisabled}
        />
      </section>
    </form>
  );
}
