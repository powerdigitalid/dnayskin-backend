const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3000;
require('dotenv').config();

mongoose.set('strictQuery', true).connect(process.env.DATABASE_URL, {family: 4, useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.info(`[${process.env.NODE_ENV}] Connected to database`);
    app.listen(port, () => {
      console.log(`[${process.env.NODE_ENV}] Server is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
