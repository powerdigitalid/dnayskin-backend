const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;
require('dotenv').config();

mongoose.set('strictQuery', true).connect(process.env.DATABASE_URL)
  .then(() => {
    app.listen(port, () => {
      console.log(`[${process.env.NODE_ENV}] Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
