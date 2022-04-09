import { REQUEST_PRODUCTS } from '../actions';

const INTIAL_STATE = {
  products: [],
  categories: [],
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
    default:
      return state;
  }
};

export default dataReducer;
