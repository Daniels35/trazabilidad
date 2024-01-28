const db = require('../config/database');

const ProductsModel = {};

// Crear la tabla de productos si no existe
//Registrar el producto la empresa tambien
//
db.query(`
  CREATE TABLE IF NOT EXISTS productos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    imagen VARCHAR(255)
  )
`, (err) => {
  if (err) {
    console.error('Error al crear la tabla de productos: ' + err);
  } else {
    console.log('La tabla de productos se creó con éxito.');
  }
});

// Obtener todos los productos
ProductsModel.getAll = (callback) => {
  db.query('SELECT * FROM productos', (err, productos) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, productos);
  });
};

// Obtener un producto por su ID
ProductsModel.getById = (id, callback) => {
  db.query('SELECT * FROM productos WHERE id = ?', [id], (err, producto) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, producto[0]);
  });
};

// Crear un nuevo producto
ProductsModel.create = (nuevoProducto, callback) => {
  db.query('INSERT INTO productos SET ?', nuevoProducto, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    nuevoProducto.id = result.insertId;
    callback(null, nuevoProducto);
  });
};

// Actualizar un producto por su ID
ProductsModel.update = (id, productoActualizado, callback) => {
  db.query('UPDATE productos SET ? WHERE id = ?', [productoActualizado, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    productoActualizado.id = id;
    callback(null, productoActualizado);
  });
};

// Eliminar un producto por su ID
ProductsModel.delete = (id, callback) => {
  db.query('DELETE FROM productos WHERE id = ?', [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.affectedRows);
  });
};

module.exports = ProductsModel;
