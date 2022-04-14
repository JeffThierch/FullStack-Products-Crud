const categoryValidations = require('./validations/categoryValidations');
const { prismaClient } = require('../models/prismaClient');

const getAll = async ({includeProducts}) => {

  if (!includeProducts) {
    const allCategories = await prismaClient.category.findMany();
  
    return allCategories;
  }

  const allCategoriesWithProduct = await prismaClient.category.findMany({
    include: {
       products: {
         select: { id: true, name: true, code: true, is_active: true }
        }
      },
  })

  return allCategoriesWithProduct
};

const create = async ({name}) => {
  categoryValidations.validateCreateCategorie({name});

  const categoryNameExist = await prismaClient.category.findUnique(
    {where: {name}}
  )

  if(categoryNameExist) {
    throw new Error('CATEGORY_ALREADY_EXIST');
  }

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