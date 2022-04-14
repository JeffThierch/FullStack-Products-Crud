import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';
import AplicationContext from './AplicationContext';

function AplicationProvider({ children }) {
  const [productName, changeName] = useState('');
  const [productCode, changeCode] = useState('');
  const [productCategory, changeCategory] = useState('1');
  const [isEditMode, changeEditMode] = useState(false);

  const changeProductName = ({ value }) => {
    changeName(value);
  };

  const changeProductCode = ({ value }) => {
    changeCode(value);
  };

  const changeProductCategory = ({ value }) => {
    changeCategory(value);
  };

  const toggleEditMode = () => {
    changeEditMode((prevState) => !prevState);
  };

  const stateValue = useMemo(() => ({
    productName,
    changeProductName,
    productCode,
    changeProductCode,
    productCategory,
    changeProductCategory,
    isEditMode,
    toggleEditMode,
  }), [
    productName,
    changeProductName,
    productCode,
    changeProductCode,
    productCategory,
    changeProductCategory,
    isEditMode,
    toggleEditMode,
  ]);

  return (
    <AplicationContext.Provider value={stateValue}>
      { children }
    </AplicationContext.Provider>
  );
}

AplicationProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AplicationProvider;
