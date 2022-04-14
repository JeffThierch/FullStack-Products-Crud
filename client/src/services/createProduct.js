import axios from 'axios';

const createProduct = async ({ name, code, categoryId }) => {
  const RETURNED_OBJ = {
    data: [],
    error: '',
  };

  try {
    const PORT = process.env.REACT_APP_SERVER_PORT;
    const newProduct = await axios.post(`http://localhost:${PORT}/products`, {
      name,
      code,
      category_id: categoryId,
    });

    return {
      ...RETURNED_OBJ,
      data: newProduct.data,
    };
  } catch (err) {
    return {
      ...RETURNED_OBJ,
      error: err.message,
    };
  }
};

export default createProduct;
