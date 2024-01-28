const express = require('express');
const router = express.Router();
const tazaDeTrazabilidadController = require('../controllers/TazaDeTrazabilidadController');

// Ruta para obtener todas las tazas de trazabilidad
router.get('/tazas', tazaDeTrazabilidadController.getAllTazas);

// Ruta para obtener una taza de trazabilidad por su ID (UUID)
router.get('/tazas/:id', tazaDeTrazabilidadController.getTazaById);

// Ruta para crear una nueva taza de trazabilidad
router.post('/tazas', tazaDeTrazabilidadController.createTaza);

// Ruta para actualizar una taza de trazabilidad por su ID (UUID)
router.put('/tazas/:id', tazaDeTrazabilidadController.updateTaza);

// Ruta para eliminar una taza de trazabilidad por su ID (UUID)
router.delete('/tazas/:id', tazaDeTrazabilidadController.deleteTaza);

// Ruta para obtener datos de una taza de trazabilidad por su QrId
router.get('/tazas/qr/:qrId', tazaDeTrazabilidadController.getTazaByQrId);


module.exports = router;
