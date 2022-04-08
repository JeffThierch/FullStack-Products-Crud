const { validateIfFieldExist } = require('./helpers')

const validateCreateProductFields = ({name, code, category_id}) => {
  switch (true) {
    case !validateIfFieldExist(name):
      throw new Error('UND_NAME');
    case !validateIfFieldExist(code):
      throw new Error('UND_CODE');
    case !validateIfFieldExist(category_id):
      throw new Error('UND_CATEGORY_ID');
    default:
      return true
  }
}

module.exports = {
  validateCreateProductFields
}