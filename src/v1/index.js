require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morganMiddleware = require('./middlewares/morgan.middleware');
const app = express();
const port = process.env.PORT || 3000;

app.use(morganMiddleware);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`[${process.env.NODE_ENV}] Server is running on port ${port}`);
});