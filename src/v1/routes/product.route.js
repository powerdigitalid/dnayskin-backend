const express = require('express');
const router = express.Router();

const productController = require('../controllers/product.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', productController.showAll);
router.get('/:id', productController.showById);
router.post('/create', productController.create);
router.put('/update/:id', productController.update);
router.delete('/delete/:id', productController.delete);

module.exports = router;