const express = require('express');
const router = express.Router();

const reservationController = require('../controllers/reservation.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', reservationController.showAll);
router.get('/:id', reservationController.showById);
router.post('/create', reservationController.create);
router.put('/update/:id', reservationController.update);
router.delete('/delete/:id', reservationController.delete);

module.exports = router;