const ERROR_MESSAGES = {
  UND_NAME: {code: 400, message: "The field 'name' is required"},
  UND_CODE: {code: 400, message: "The field 'code' is required"},
  UND_CATEGORY_ID: {code: 400, message: "The field 'category_id' is required"},
  CATEGORY_ALREADY_EXIST: {code: 409, message: "Category already exists"},
  CODE_ALREADY_EXIST: {code: 409, message: "Code already exists"},
  CATEGORY_NOT_EXIST: {code: 404, message: "Category not exist"},
  PRODUCT_NOT_EXIST: {code: 404, message: "Product not exist"},
};

module.exports = {
  ERROR_MESSAGES
};