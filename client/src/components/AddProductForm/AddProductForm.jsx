import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AplicationContext from '../../context/AplicationContext';
import { requestCategoriesFromApi } from '../../redux/actions';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

export default function AddProductForm() {
  const {
    productName,
    changeProductName,
    productCode,
    changeProductCode,
    changeProductCategory,
  } = useContext(AplicationContext);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestCategoriesFromApi());
  }, [dispatch]);

  const categories = useSelector((state) => state.dataReducer.categories);

  return (
    <form>
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

      <Select
        name="category-select"
        label="Category"
        options={categories}
        onChangeCb={changeProductCategory}
      />

      <Button text="Create Product" onClickCb="" />
    </form>
  );
}
