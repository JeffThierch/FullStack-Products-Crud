const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Estou vivo')
})

const productRoutes = require('../routes/productRoutes')
app.use('/products', productRoutes)

const categoriesRoutes = require('../routes/categoryRoutes')
app.use('/categories', categoriesRoutes)

const errorController = require('../controllers/errorController')
app.use(errorController);

module.exports = app;