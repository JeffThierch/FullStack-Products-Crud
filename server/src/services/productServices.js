const productValidations = require('./validations/productValidations');
const { prismaClient } = require('../models/prismaClient');

const getAll = async () => {
  const allProducts = await prismaClient.product.findMany();

  return allProducts;
}

const create = async ({name, code, is_active, category_id}) => {

}

module.exports = {
  getAll,
  create
}