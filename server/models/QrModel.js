const db = require('../config/database');

const QrModel = {};
///Venta
//la empresa que lo emite  
// Crear la tabla de códigos QR si no existe
db.query(`
  CREATE TABLE IF NOT EXISTS qr (
    id CHAR(36) PRIMARY KEY,
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    productId INT NOT NULL
  )
`, (err) => {
  if (err) {
    console.error('Error al crear la tabla de códigos QR: ' + err);
  } else {
    console.log('La tabla de códigos QR se creó con éxito.');
  }
});

// Crear un nuevo código QR
QrModel.create = (nuevoQr, callback) => {
  db.query('INSERT INTO qr SET ?', nuevoQr, (err, result) => {
    if (err) {
      return callback(err, null);
    }
    nuevoQr.id = result.insertId;
    callback(null, nuevoQr);
  });
};

module.exports = QrModel;
