const server = require('./app')
require('dotenv').config()

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`);
});