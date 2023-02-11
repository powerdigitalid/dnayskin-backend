const express = require('express');
const router = express.Router();

const bannerController = require('../controllers/banner.controller');

router.get('/all', bannerController.showAll);
router.post('/create', bannerController.create);
router.put('/update/:id', bannerController.update);
router.delete('/delete/:id', bannerController.delete);

module.exports = router;