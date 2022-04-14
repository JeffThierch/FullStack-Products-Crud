import axios from 'axios';

const getProducts = async () => {
  const RETURNED_OBJ = {
    data: [],
    error: '',
  };

  try {
    const PORT = process.env.REACT_APP_SERVER_PORT;
    const products = await axios.get(`http://localhost:${PORT}/products?includeCatagory=true`);

    return {
      ...RETURNED_OBJ,
      data: products.data,
    };
  } catch (err) {
    return {
      ...RETURNED_OBJ,
      error: err.message,
    };
  }
};

export default getProducts;
