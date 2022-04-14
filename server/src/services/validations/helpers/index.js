const validateIfFieldExist = (field) => field !== undefined

const validateDataType = (data, type) => typeof data === type

module.exports = {
  validateIfFieldExist,
  validateDataType
}