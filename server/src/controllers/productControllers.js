const getAll = async (req, res, next) => {
  try {
    const allProducts = await productsServices.getAll();

    return res.status(200).json(allProducts);
  } catch (error) {
    return next(error.message);
  }

};