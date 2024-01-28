const express = require('express');
const router = express.Router();
const estadoController = require('../controllers/EstadoController');

// Ruta para obtener todos los estados
router.get('/estados', estadoController.getAllEstados);

// Ruta para obtener un estado por su ID
router.get('/estados/:id', estadoController.getEstadoById);

// Ruta para crear un nuevo estado
router.post('/estados', estadoController.createEstado);

// Ruta para actualizar un estado por su ID
router.put('/estados/:id', estadoController.updateEstado);

// Ruta para eliminar un estado por su ID
router.delete('/estados/:id', estadoController.deleteEstado);

module.exports = router;
