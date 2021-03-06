import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import productsTableHead from '../../helpers/data';
import { editProduct, requestDeleteProduct, requestProductsFromApi } from '../../redux/actions';
import AplicationContext from '../../context/AplicationContext';
import ProductNotFound from '../ProductNotFound/ProductNotFound';
import style from './Table.module.css';

export default function Table() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProductsFromApi());
  }, [dispatch]);

  const productsData = useSelector((state) => state.dataReducer.products);

  const { toggleEditMode, isEditMode } = useContext(AplicationContext);

  const editProductInfos = (productId) => {
    const productToEdit = productsData.find((product) => product.id === productId);

    dispatch(editProduct(productToEdit));

    toggleEditMode();
  };

  const deleteProduct = (productId) => {
    dispatch(requestDeleteProduct(productId));
  };

  return (
    !productsData.length ? <ProductNotFound /> : (
      <table className={`${style.tableContainer}`}>
        <thead className={`${style.tableTheadContainer}`}>
          <tr>
            {productsTableHead.map((head) => (
              <th key={head}>{head}</th>
            ))}
          </tr>
        </thead>
        <tbody className={`${style.tableTbodyContainer}`}>
          {productsData.map((product) => (
            <tr key={(product.id)}>
              <td>{product.name}</td>
              <td>{product.code}</td>
              <td>{product.category.name}</td>
              <td>{`${product.is_active}`}</td>
              <td>
                <button
                  type="button"
                  data-testid="edit-btn"
                  className={`${style.editBtn}`}
                  disabled={isEditMode}
                  onClick={() => editProductInfos(product.id)}
                >
                  <FaEdit />
                </button>

                <button
                  type="button"
                  data-testid="delete-btn"
                  className={`${style.deleteBtn}`}
                  onClick={() => deleteProduct(product.id)}
                >
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )
  );
}
