const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', validateToken, productController.showAll);
router.get('/:id', validateToken, productController.showById);
router.post('/create', validateToken, productController.create);
router.put('/update/:id', validateToken, productController.update);
router.delete('/delete/:id', validateToken, productController.delete);

module.exports = router;