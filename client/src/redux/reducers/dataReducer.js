import {} from '../actions';

const INTIAL_STATE = {
  products: [],
  categories: [],
  error: '',
};

const dataReducer = (state = INTIAL_STATE, { type, payload } = {}) => {
  switch (type) {
    default:
      return state;
  }
};

export default dataReducer;
