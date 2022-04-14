import axios from 'axios';

const createCategory = async (categoryName) => {
  const RETURNED_OBJ = {
    data: [],
    error: '',
  };

  try {
    const PORT = process.env.REACT_APP_SERVER_PORT;
    const newCategorie = await axios.post(`http://localhost:${PORT}/categories`, {
      name: categoryName,
    });

    return {
      ...RETURNED_OBJ,
      data: newCategorie.data,
    };
  } catch (err) {
    return {
      ...RETURNED_OBJ,
      error: err.message,
    };
  }
};

export default createCategory;
