const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.post('/create', validateToken, orderController.create);
router.get('/all',validateToken, orderController.showAll); 
router.get('/:id',validateToken, orderController.showById);
router.get('/customer/:customerName', orderController.showByCustomerName);
router.put('/update/:id', validateToken, orderController.update);
router.delete('/delete/:id', validateToken, orderController.delete);

module.exports = router;
