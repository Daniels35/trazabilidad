const db = require('../config/database');

const EstadoModel = {};

// Crear la tabla de estado si no existe
///
//Fabricación, Entrada, Salida, Cliente final (Transito)
db.query(`
  CREATE TABLE IF NOT EXISTS estado (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Error al crear la tabla de estado: ' + err);
  } else {
    console.log('La tabla de estado se creó con éxito.');
  }
});

// Obtener todos los estados
EstadoModel.getAll = (callback) => {
  db.query('SELECT * FROM estado', (err, estados) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, estados);
  });
};

// Obtener un estado por su ID
EstadoModel.getById = (id, callback) => {
  db.query('SELECT * FROM estado WHERE id = ?', [id], (err, estado) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, estado[0]);
  });
};

// Crear un nuevo estado
EstadoModel.create = (nuevoEstado, callback) => {
  db.query('INSERT INTO estado SET ?', nuevoEstado, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    nuevoEstado.id = result.insertId;
    callback(null, nuevoEstado);
  });
};

// Actualizar un estado por su ID
EstadoModel.update = (id, estadoActualizado, callback) => {
  db.query('UPDATE estado SET ? WHERE id = ?', [estadoActualizado, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    estadoActualizado.id = id;
    callback(null, estadoActualizado);
  });
};

// Eliminar un estado por su ID
EstadoModel.delete = (id, callback) => {
  db.query('DELETE FROM estado WHERE id = ?', [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.affectedRows);
  });
};

module.exports = EstadoModel;
