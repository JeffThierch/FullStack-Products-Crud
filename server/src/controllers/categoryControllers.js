const categoryServices = require('../services/categoryServices');

const getAll = async (_req, res, next) => {
  try {
    const allCategories = await categoryServices.getAll();

    return res.status(200).json(allCategories);

  } catch (error) {
    return next(error.message);
  }
};

const create = async (req, res, next) => {
  try {
    const { name } = req.body;

    const newCategory = await categoryServices.create({ name });

    return res.status(201).json(newCategory);

  } catch (error) {
    return next(error.message);
  }
};

module.exports = {
  getAll,
  create
}