const productValidations = require('./validations/productValidations');
const { prismaClient } = require('../models/prismaClient');

const getAll = async () => {
  const allProducts = await prismaClient.product.findMany();

  return allProducts;
}

const create = async ({name, code, is_active, category_id}) => {
  productValidations.validateCreateProductFields({name, code, category_id});

  const categoryExist = await prismaClient.category.findUnique({where: {id: category_id}});

  if (!categoryExist) {
    throw new Error('CATEGORY_NOT_EXIST');
  }

  const codeAlreadyExist = await prismaClient.product.findUnique({where: {code}});

  if(codeAlreadyExist) {
    throw new Error('CODE_ALREADY_EXIST');
  }

  const newProduct = await prismaClient.product.create({
    data: {
      name,
      code,
      is_active,
      category_id
    }
  });

  return newProduct
}

const update = async ({ id, name, code, is_active, category_id }) => {
  const intID = parseInt(id)

  const productExist = await prismaClient.product.findUnique({where: {id: intID}})

  if(!productExist) {
    throw new Error('PRODUCT_NOT_EXIST');
  }

  await prismaClient.product.update({
    where: {id: intID},
    data: {
      name,
      code,
      is_active,
      category_id
    }
  })

  return { id: intID, name, code, is_active, category_id }
}

const deleteProduct = async (id) => {
  const intID = parseInt(id)

  const productExist = await prismaClient.product.findUnique({where: {id: intID}})

  if(!productExist) {
    throw new Error('PRODUCT_NOT_EXIST');
  }

  await prismaClient.product.delete({
    where: {id: intID}
  })
}

module.exports = {
  getAll,
  create,
  update,
  deleteProduct
}