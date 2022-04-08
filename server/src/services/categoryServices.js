const categoryValidations = require('./validations/categoryValidations');
const { prismaClient } = require('../models/prismaClient');

const getAll = async () => {
  const allCategories = await prismaClient.category.findMany();

  return allCategories;
};

const create = async () => {

};

module.exports = {
  getAll,
  create
}