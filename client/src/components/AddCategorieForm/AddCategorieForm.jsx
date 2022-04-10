import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { requestCreateCategorie } from '../../redux/actions';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function AddCategorieForm() {
  const dispatch = useDispatch();

  const [categorieInputName, setCategoryName] = useState('');
  const [isButtonDisabled, setButtonState] = useState(true);

  const changeCategoryName = ({ value }) => {
    setCategoryName(value);
  };

  const createCategory = (categorieName) => {
    dispatch(requestCreateCategorie(categorieName));
  };

  const validateFields = () => {
    const errorCases = [
      !categorieInputName.length,
      !categorieInputName.trim().length,
    ];

    const haveError = errorCases.some((error) => error === true);

    setButtonState(haveError);
  };

  useEffect(() => {
    validateFields();
  }, [categorieInputName]);

  return (
    <form>
      <Input
        name="input-categorie-name"
        label="Categorie Name"
        type="text"
        value={categorieInputName}
        onChangeCb={changeCategoryName}
      />
      <Button
        text="Create Categorie"
        isDisabled={isButtonDisabled}
        onClickCb={() => createCategory(categorieInputName)}
      />
    </form>
  );
}
