const db = require('../config/database');

const TazaDeTrazabilidadModel = {};

// Crear la tabla de taza_de_trazabilidad si no existe
db.query(`
  CREATE TABLE IF NOT EXISTS taza_de_trazabilidad (
    id CHAR(36) PRIMARY KEY,
    QrId VARCHAR(255) NOT NULL,
    ubicacionId INT NOT NULL,
    fecha_y_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    estadoId INT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Error al crear la tabla de taza_de_trazabilidad: ' + err);
  } else {
    console.log('La tabla de taza_de_trazabilidad se creó con éxito.');
  }
});

// Obtener todas las tazas de trazabilidad
TazaDeTrazabilidadModel.getAll = (callback) => {
  db.query('SELECT * FROM taza_de_trazabilidad', (err, tazas) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, tazas);
  });
};

// Obtener una taza de trazabilidad por su ID (UUID)
TazaDeTrazabilidadModel.getById = (id, callback) => {
  db.query('SELECT * FROM taza_de_trazabilidad WHERE id = ?', [id], (err, taza) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, taza[0]);
  });
};

// Crear una nueva taza de trazabilidad
TazaDeTrazabilidadModel.create = (nuevaTaza, callback) => {
  db.query('INSERT INTO taza_de_trazabilidad SET ?', nuevaTaza, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, nuevaTaza);
  });
};

// Actualizar una taza de trazabilidad por su ID (UUID)
TazaDeTrazabilidadModel.update = (id, tazaActualizada, callback) => {
  db.query('UPDATE taza_de_trazabilidad SET ? WHERE id = ?', [tazaActualizada, id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    tazaActualizada.id = id;
    callback(null, tazaActualizada);
  });
};

// Eliminar una taza de trazabilidad por su ID (UUID)
TazaDeTrazabilidadModel.delete = (id, callback) => {
  db.query('DELETE FROM taza_de_trazabilidad WHERE id = ?', [id], (err, result) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, result.affectedRows);
  });
};

// Obtener una taza de trazabilidad por su QrId
TazaDeTrazabilidadModel.getByQrId = (qrId, callback) => {
    db.query('SELECT * FROM taza_de_trazabilidad WHERE QrId = ?', [qrId], (err, taza) => {
      if (err) {
        return callback(err, null);
      }
      callback(null, taza);
    });
  };
  

module.exports = TazaDeTrazabilidadModel;
