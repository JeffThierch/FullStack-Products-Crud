import axios from 'axios';

const requestEditProductApi = async (
  {
    id, name, code, categoryId, isActive,
  },
) => {
  const RETURNED_OBJ = {
    data: [],
    error: '',
  };

  try {
    const PORT = process.env.REACT_APP_SERVER_PORT;
    const newProduct = await axios.patch(`http://localhost:${PORT}/products/${id}`, {
      name,
      code,
      category_id: categoryId,
      is_active: isActive,
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

export default requestEditProductApi;
