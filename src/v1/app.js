require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morganMiddleware = require('./middlewares/morgan.middleware');
const app = express();

app.use(morganMiddleware);
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/auth', require('./routes/auth.route'));

module.exports = app;
