const express = require('express');
const router = express.Router();

const treatmentController = require('../controllers/treatment.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', validateToken, treatmentController.showAll);
router.get('/:id', validateToken, treatmentController.showById);
router.post('/create', validateToken, treatmentController.create);
router.put('/update/:id', validateToken, treatmentController.update);
router.delete('/delete/:id', validateToken, treatmentController.delete);

module.exports = router;