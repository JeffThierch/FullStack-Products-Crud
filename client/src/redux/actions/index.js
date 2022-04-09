import createProduct from '../../services/createProduct';
import getCategories from '../../services/getCategories';
import getProducts from '../../services/getProducts';

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS';
export const REQUEST_CATEGORIES = 'REQUEST_CATEGORIES';

const requestProducts = (productsData) => ({
  type: REQUEST_PRODUCTS,
  payload: productsData,
});

const requestCategories = (categoriesData) => ({
  type: REQUEST_CATEGORIES,
  payload: categoriesData,
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
