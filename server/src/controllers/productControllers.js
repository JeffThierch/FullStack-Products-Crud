const getAll = async (_req, res, next) => {
  try {
    const allProducts = await productsServices.getAll();

    return res.status(200).json(allProducts);
  } catch (error) {
    return next(error.message);
  }
};

const create = async (req, res, next) => {
  try {
    const { name, code, is_active, category_id } = req.body;

    const createdProduct = await productsServices.create({name, code, is_active, category_id});

    res.status(201).json(createdProduct);
  
  } catch (error) {
    return next(error.message);
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params
    const { name, code, is_active, category_id } = req.body;

    const updatedProduct = await productsServices.update(
      { id, name, code, is_active, category_id }
    )

    res.status(201).json(updatedProduct);
  } catch (error) {
    return next(error.message);
  }
}