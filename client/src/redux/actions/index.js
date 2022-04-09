import createProduct from '../../services/createProduct';
import deleteProduct from '../../services/deleteProduct';
import getCategories from '../../services/getCategories';
import getProducts from '../../services/getProducts';
import requestEditProductApi from '../../services/requestEditProductApi';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';
export const EDIT_PRODUCT = 'EDIT_PRODUCT';

const requestProducts = (productsData) => ({
  type: REQUEST_PRODUCTS,
  payload: productsData,
});

const requestCategories = (categoriesData) => ({
  type: REQUEST_CATEGORIES,
  payload: categoriesData,
});

export const editProduct = (productInfos) => ({
  type: EDIT_PRODUCT,
  payload: productInfos,
});

export const requestProductsFromApi = () => async (dispatch) => {
  const products = await getProducts();

  dispatch(requestProducts(products));
};

export const requestCategoriesFromApi = () => async (dispatch) => {
  const categories = await getCategories();

  dispatch(requestCategories(categories));
};

export const createNewProduct = ({ name, code, categoryId }) => async (dispatch) => {
  const intCategoryId = parseInt(categoryId, 10);
  await createProduct({ name, code, categoryId: intCategoryId });

  dispatch(requestProductsFromApi());
};

export const requestEditProduct = (
  {
    id, name, code, categoryId, isActive,
  },
) => async (dispatch) => {
  const intCategoryId = parseInt(categoryId, 10);

  await requestEditProductApi(
    {
      id, name, code, categoryId: intCategoryId, isActive,
    },
  );

  dispatch(requestProductsFromApi());
};

export const requestDeleteProduct = (productId) => async (dispatch) => {
  await deleteProduct(productId);
  dispatch(requestProductsFromApi());
};
