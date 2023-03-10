const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customer.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', validateToken, customerController.showAll);
router.get('/:id', validateToken, customerController.showById);
router.post('/create', validateToken, customerController.create);
router.put('/update/:id', validateToken, customerController.update);
router.delete('/delete/:id', validateToken, customerController.delete);

module.exports = router;
