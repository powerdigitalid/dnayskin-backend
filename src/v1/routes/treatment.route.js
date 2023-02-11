const express = require('express');
const router = express.Router();

const treatmentController = require('../controllers/treatment.controller');

router.get('/all', treatmentController.showAll);
router.get('/:id', treatmentController.showById);
router.post('/create', treatmentController.create);
router.put('/update/:id', treatmentController.update);
router.delete('/delete/:id', treatmentController.delete);

module.exports = router;