const categoryValidations = require('./validations/categoryValidations');
const { prismaClient } = require('../models/prismaClient');

const getAll = async () => {
  const allCategories = await prismaClient.category.findMany();

  return allCategories;
};

const create = async ({name}) => {
  categoryValidations.validateCreateCategorie({name});

  const newCategory = await prismaClient.category.create({
    data: {
      name
    }
  });

  return  newCategory;
};

module.exports = {
  getAll,
  create
}