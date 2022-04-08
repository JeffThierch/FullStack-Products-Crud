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

module.exports = {
  getAll,
  create
}