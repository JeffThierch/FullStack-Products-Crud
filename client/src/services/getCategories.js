import axios from 'axios';

const getCategories = async () => {
  const RETURNED_OBJ = {
    data: [],
    error: '',
  };

  try {
    const PORT = process.env.REACT_APP_SERVER_PORT;
    const categories = await axios.get(`http://localhost:${PORT}/categories?includeProducts=true`);

    return {
      ...RETURNED_OBJ,
      data: categories.data,
    };
  } catch (err) {
    return {
      ...RETURNED_OBJ,
      error: err.message,
    };
  }
};

export default getCategories;
