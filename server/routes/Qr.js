const express = require('express');
const router = express.Router();
const qrController = require('../controllers/QrController');

// Ruta para crear un nuevo código QR
router.post('/qr', qrController.createQr);

module.exports = router;
