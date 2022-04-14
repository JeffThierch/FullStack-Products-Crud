import axios from 'axios';

const deleteProduct = async (productId) => {
  const RETURNED_OBJ = {
    data: [],
    error: '',
  };

  try {
    const PORT = process.env.REACT_APP_SERVER_PORT;
    const product = await axios.delete(`http://localhost:${PORT}/products/${productId}`);

    return {
      ...RETURNED_OBJ,
      data: product.data,
    };
  } catch (err) {
    return {
      ...RETURNED_OBJ,
      error: err.message,
    };
  }
};

export default deleteProduct;
