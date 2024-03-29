require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morganMiddleware = require('./middlewares/morgan.middleware');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.config');
const app = express();

app.use(morganMiddleware);
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}));

app.get('/', (req, res) => {
  res.status(200).json({message: 'DnaySkin API v1'});
});

app.use('/rumahatha-backend/api/v1/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument.swaggerSpec));
app.use('/rumahatha-backend/api/v1/auth', require('./routes/auth.route'));
app.use('/rumahatha-backend/api/v1/banner', require('./routes/banner.route'));
app.use('/rumahatha-backend/api/v1/customer', require('./routes/customer.route'));
app.use('/rumahatha-backend/api/v1/dashboard', require('./routes/dashboard.route'));
app.use('/rumahatha-backend/api/v1/product', require('./routes/product.route'));
app.use('/rumahatha-backend/api/v1/order', require('./routes/order.route'));
app.use('/rumahatha-backend/api/v1/reservation', require('./routes/reservation.route'));
app.use('/rumahatha-backend/api/v1/treatment', require('./routes/treatment.route'));
app.use('/rumahatha-backend/api/v1/upload', require('./routes/upload.route'));
app.use('/rumahatha-backend/api/v1/uploaded', express.static(path.join(__dirname, '/../../uploads')));

module.exports = app;
