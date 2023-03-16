const express = require('express');
const router = express.Router();

const dashboardController = require('../controllers/dashboard.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/counter/:type', dashboardController.show);

module.exports = router;