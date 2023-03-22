const express = require('express');
const router = express.Router();

const reservationController = require('../controllers/reservation.controller');
const validateToken = require('../middlewares/validateToken.middleware');

router.get('/all', validateToken, reservationController.showAll);
router.get('/:id', validateToken, reservationController.showById);
router.post('/create', validateToken, reservationController.create);
router.put('/update/:id', validateToken, reservationController.update);
router.delete('/delete/:id', validateToken, reservationController.delete);

module.exports = router;