const express = require('express');

const router = express.Router();

const productController = require('../controllers/productControllers')

router
  .get('/', productController.getAll)
  .post('/', productController.create)
  .patch('/:id', productController.update)
  .delete('/:id', productController.deleteProduct)

module.exports = router