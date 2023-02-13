const express = require('express');
const router = express.Router();

const orderController = require('../controllers/order.controller');

router.post('/create', orderController.create);
router.get('/all', orderController.showAll);
router.get('/:id', orderController.showById);
router.put('/update/:id', orderController.update);
router.delete('/delete/:id', orderController.delete);

module.exports = router;
