import getProducts from '../../services/getProducts';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';

const requestProducts = (productsData) => ({
  type: REQUEST_PRODUCTS,
  payload: productsData,
});

export const requestProductsFromApi = () => async (dispatch) => {
  const products = await getProducts();

  dispatch(requestProducts(products));
};
