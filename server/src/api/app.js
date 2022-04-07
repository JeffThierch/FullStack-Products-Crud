const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Estou vivo')
})

module.exports = app;