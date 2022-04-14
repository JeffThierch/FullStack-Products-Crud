const productsServices = require('../services/productServices');

const getAll = async (req, res, next) => {
  try {

    const { includeCatagory } = req.query;
    const allProducts = await productsServices.getAll(includeCatagory);

    return res.status(200).json(allProducts);
  } catch (error) {
    console.error(error.message)

    return next(error.message);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, code, is_active, category_id } = req.body;

    const createdProduct = await productsServices.create({name, code, is_active, category_id});

    return res.status(201).json(createdProduct);

  } catch (error) {
    console.error(error.message)

    return next(error.message);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { name, code, is_active, category_id } = req.body;

    const updatedProduct = await productsServices.update(
      { id, name, code, is_active, category_id }
    );

    return res.status(201).json(updatedProduct);

  } catch (error) {
    console.error(error.message)

    return next(error.message);
  }
}

const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    await productsServices.deleteProduct(id);

    return res.status(200).json({message: `Product with id: ${id} deleted successfully`});

  } catch (error) {
    console.error(error.message)

    return next(error.message);
  }
}

module.exports = {
  getAll,
  create,
  update,
  deleteProduct,
}