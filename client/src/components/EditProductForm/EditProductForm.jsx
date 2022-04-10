import React, { useState, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AplicationContext from '../../context/AplicationContext';
import { requestEditProduct } from '../../redux/actions';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Select from '../Select/Select';
import style from './EditProductForm.module.css';

export default function EditProductForm() {
  const [isButtonDisabled, changeButtonStatus] = useState(true);
  const productToEdit = useSelector((state) => state.dataReducer.productToEdit);

  const [productName, changeName] = useState(productToEdit.name);
  const [productCode, changeCode] = useState(productToEdit.code);
  const [productCategory, changeCategory] = useState(productToEdit.category_id);
  const [isActive, changeStatus] = useState(productToEdit.is_active ? 0 : 1);

  const changeProductName = ({ value }) => {
    changeName(value);
  };

  const changeProductCode = ({ value }) => {
    changeCode(value);
  };

  const changeProductCategory = ({ value }) => {
    changeCategory(value);
  };

  const changeProductStatus = ({ value }) => {
    changeStatus(value);
  };

  const dispatch = useDispatch();

  const categories = useSelector((state) => state.dataReducer.categories);

  const { toggleEditMode } = useContext(AplicationContext);

  const validateFields = () => {
    const errorCases = [
      !productName.length,
      !productName.trim().length,
      !productCode.length,
      !productCode.trim().length,
    ];

    const haveSomeError = errorCases.some((error) => error === true);

    changeButtonStatus(haveSomeError);
  };

  useEffect(() => {
    validateFields();
  }, [productCode, productName]);

  const editProduct = ({
    id, name, code, categoryId, status,
  }) => {
    toggleEditMode();
    dispatch(requestEditProduct({
      id, name, code, categoryId, isActive: status,
    }));
  };

  return (
    <form className={`${style.formContainer}`}>
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
        defaultValue={productCategory}
      />

      <Select
        name="status-select"
        label="Is Active"
        options={[{ id: 0, name: 'True' }, { id: 1, name: 'False' }]}
        onChangeCb={changeProductStatus}
        defaultValue={isActive}
      />

      <Button
        text="Finish Edit"
        onClickCb={() => editProduct(
          {
            id: productToEdit.id,
            name: productName.trim(),
            code: productCode.trim(),
            categoryId: productCategory,
            status: isActive === 0,
          },
        )}
        isDisabled={isButtonDisabled}
      />
      <Button
        text="Cancel Edit"
        onClickCb={toggleEditMode}
      />
    </form>
  );
}
