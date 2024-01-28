const express = require('express');
const router = express.Router();
const ubicacionesController = require('../controllers/ubicacionesController');

// Ruta para obtener todas las ubicaciones
router.get('/ubicaciones', ubicacionesController.getAllUbicaciones);

// Ruta para obtener una ubicación por su ID
router.get('/ubicaciones/:id', ubicacionesController.getUbicacionById);

// Ruta para crear una nueva ubicación
router.post('/ubicaciones', ubicacionesController.createUbicacion);

// Ruta para actualizar una ubicación por su ID
router.put('/ubicaciones/:id', ubicacionesController.updateUbicacion);

// Ruta para eliminar una ubicación por su ID
router.delete('/ubicaciones/:id', ubicacionesController.deleteUbicacion);

module.exports = router;
