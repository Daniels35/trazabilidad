const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Ruta para obtener todos los productos
router.get('/productos', productsController.getAllProductos);

// Ruta para obtener un producto por su ID
router.get('/productos/:id', productsController.getProductoById);

// Ruta para crear un nuevo producto
router.post('/productos', productsController.createProducto);

// Ruta para actualizar un producto por su ID
router.put('/productos/:id', productsController.updateProducto);

// Ruta para eliminar un producto por su ID
router.delete('/productos/:id', productsController.deleteProducto);

module.exports = router;
