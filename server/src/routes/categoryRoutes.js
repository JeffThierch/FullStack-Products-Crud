const express = require('express');

const router = express.Router();

const categoryController = require('../controllers/categoryControllers');

router
  .get('/', categoryController.getAll)
  .post('/', categoryController.create)

module.exports = router