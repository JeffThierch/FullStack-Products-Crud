const getAll = async (_req, res, next) => {
  try {
    const allCategories = await categoryServices.getAll();

    return res.status(200).json(allCategories);

  } catch (error) {
    return next(error.message);
  }
};