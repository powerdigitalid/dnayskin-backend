const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');

router.get('/all', customerController.showAll);
router.get('/:id', customerController.showById);
router.post('/create', customerController.create);
router.put('/update/:id', customerController.update);
router.delete('/delete/:id', customerController.delete);

module.exports = router;