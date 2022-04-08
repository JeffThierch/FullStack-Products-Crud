const { validateIfFieldExist } = require('./helpers');

const validateCreateCategorie = ({name}) => {
  switch(true) {
    case !validateIfFieldExist(name):
      throw new Error('UND_NAME')
    default:
      return true
  }
}

module.exports = {
  validateCreateCategorie
}