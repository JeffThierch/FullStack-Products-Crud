import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import productsTableHead from '../../helpers/data';
import { requestProductsFromApi } from '../../redux/actions';

export default function Table() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProductsFromApi());
  }, [dispatch]);

  const productsData = useSelector((state) => state.dataReducer.products);

  return (
    <table>
      <thead>
        <tr>
          {productsTableHead.map((head) => (
            <th key={head}>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {productsData.map((product) => (
          <tr>
            <td>{product.name}</td>
            <td>{product.code}</td>
            <td>{product.category.name}</td>
            <td>{`${product.is_active}`}</td>
            <td>
              <button
                type="button"
                data-testid="edit-btn"
                className="edit-btn"
              >
                <FaEdit />
              </button>

              <button
                type="button"
                data-testid="delete-btn"
                className="delete-btn"

              >
                <FaTrashAlt />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
