import { REQUEST_PRODUCTS, REQUEST_CATEGORIES, EDIT_PRODUCT } from '../actions';

const INTIAL_STATE = {
  products: [],
  categories: [],
  productToEdit: {},
  error: '',
};

const dataReducer = (state = INTIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        products: payload.data,
        error: payload.error,
      };
    case REQUEST_CATEGORIES:
      return {
        ...state,
        categories: payload.data,
        error: payload.error,
      };
    case EDIT_PRODUCT:
      return {
        ...state,
        productToEdit: payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
