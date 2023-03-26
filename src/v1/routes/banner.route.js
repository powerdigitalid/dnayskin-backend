const express = require('express');
const router = express.Router();

const bannerController = require('../controllers/banner.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', bannerController.showAll);
router.get('/get/:id', validateToken, bannerController.showById);
router.post('/create', validateToken, bannerController.create);
router.put('/update/:id', validateToken, bannerController.update);
router.delete('/delete/:id', validateToken, bannerController.delete);

module.exports = router;