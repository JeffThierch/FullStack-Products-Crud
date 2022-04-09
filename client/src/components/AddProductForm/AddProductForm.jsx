import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AplicationContext from '../../context/AplicationContext';
import { createNewProduct, requestCategoriesFromApi } from '../../redux/actions';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';

export default function AddProductForm() {
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

  const validateInputField = () => {
    const errorCases = [
      productName.length === 0,
      productName.trim().length === 0,
      productCode.length === 0,
      productCode.trim().length === 0,
    ];

    const haveSomeError = errorCases.some((error) => error === true);

    changeButtonStatus(haveSomeError);
  };

  useEffect(() => {
    validateInputField();
  }, [productCode, productName]);

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

      <Button
        text="Create Product"
        onClickCb={() => createProduct(
          { name: productName.trim(), code: productCode.trim(), categoryId: productCategory },
        )}
        isDisabled={isButtonDisabled}

      />
    </form>
  );
}
