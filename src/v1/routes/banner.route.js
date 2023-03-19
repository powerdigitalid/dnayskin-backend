const express = require('express');
const router = express.Router();

const bannerController = require('../controllers/banner.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', bannerController.showAll);
router.get('/get/:id', bannerController.showById);
router.post('/create', bannerController.create);
router.put('/update/:id', bannerController.update);
router.delete('/delete/:id', bannerController.delete);

module.exports = router;