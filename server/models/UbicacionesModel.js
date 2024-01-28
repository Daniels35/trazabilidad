const db = require('../config/database');

const UbicacionesModel = {};

// Crear la tabla de ubicaciones si no existe
db.query(`
  CREATE TABLE IF NOT EXISTS ubicaciones (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Error al crear la tabla de ubicaciones: ' + err);
  } else {
    console.log('La tabla de ubicaciones se creó con éxito.');
  }
});

// Obtener todas las ubicaciones
UbicacionesModel.getAll = (callback) => {
  db.query('SELECT * FROM ubicaciones', (err, ubicaciones) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, ubicaciones);
  });
};

// Obtener una ubicación por su ID
UbicacionesModel.getById = (id, callback) => {
  db.query('SELECT * FROM ubicaciones WHERE id = ?', [id], (err, ubicacion) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, ubicacion[0]);
  });
};

// Crear una nueva ubicación
UbicacionesModel.create = (nuevaUbicacion, callback) => {
  db.query('INSERT INTO ubicaciones SET ?', nuevaUbicacion, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    nuevaUbicacion.id = result.insertId;
    callback(null, nuevaUbicacion);
  });
};

// Actualizar una ubicación por su ID
UbicacionesModel.update = (id, ubicacionActualizada, callback) => {
  db.query('UPDATE ubicaciones SET ? WHERE id = ?', [ubicacionActualizada, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    ubicacionActualizada.id = id;
    callback(null, ubicacionActualizada);
  });
};

// Eliminar una ubicación por su ID
UbicacionesModel.delete = (id, callback) => {
  db.query('DELETE FROM ubicaciones WHERE id = ?', [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.affectedRows);
  });
};

module.exports = UbicacionesModel;
