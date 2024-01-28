const ProductsModel = require('../models/ProductsModel');

// Obtener todos los productos
exports.getAllProductos = (req, res) => {
  ProductsModel.getAll((err, productos) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los productos' });
    }
    res.json(productos);
  });
};

// Obtener un producto por su ID
exports.getProductoById = (req, res) => {
  const id = req.params.id;
  ProductsModel.getById(id, (err, producto) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener el producto' });
    }
    res.json(producto);
  });
};

// Crear un nuevo producto
exports.createProducto = (req, res) => {
  const nuevoProducto = req.body;

  ProductsModel.create(nuevoProducto, (err, producto) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear el producto' });
    }

    res.json({ message: 'Producto agregado con éxito', producto });
  });
};

// Actualizar un producto por su ID
exports.updateProducto = (req, res) => {
  const id = req.params.id;
  const productoActualizado = req.body;
  ProductsModel.update(id, productoActualizado, (err, producto) => {
    if (err) {
      return res.status(500).json({ error: 'Error al actualizar el producto' });
    }
    res.json({ message: 'Producto actualizado con éxito', producto });
  });
};

// Eliminar un producto por su ID
exports.deleteProducto = (req, res) => {
  const id = req.params.id;
  ProductsModel.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al eliminar el producto' });
    }
    res.json({ message: 'Producto eliminado con éxito', result });
  });
};
