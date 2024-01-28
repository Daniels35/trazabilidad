const QrModel = require('../models/QrModel');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const TazaDeTrazabilidadModel = require('../models/TazaDeTrazabilidadModel');

// Crear un nuevo código QR y registrar la taza de trazabilidad
exports.createQr = (req, res) => {
  const nuevoQr = req.body;

  // Generar un nuevo UUID para el código QR
  const qrId = uuidv4();

  // Crear el código QR
  QRCode.toFile(`${__dirname}/qrcodes/${qrId}.png`, qrId, (err) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear el código QR', err });
    }

    // Registrar el código QR en la tabla
    const qrData = {
      id: qrId,
      productId: nuevoQr.productId,
    };

    QrModel.create(qrData, (dbErr, qr) => {
      if (dbErr) {
        return res.status(500).json({ error: 'Error al registrar el código QR en la base de datos', dbErr });
      }

      // Crear una nueva taza de trazabilidad
      const tazaData = {
        id: uuidv4(),
        QrId: qrId,
        ubicacionId: 1,  // La ubicación (fábrica)
        estadoId: 1,    // estado(fabricación)
      };

      TazaDeTrazabilidadModel.create(tazaData, (err, taza) => {
        if (err) {
          return res.status(500).json({ error: 'Error al crear la taza de trazabilidad', err });
        }

        // Enviar la URL del código QR y la respuesta
        res.json({
          message: 'Código QR y taza de trazabilidad creados con éxito',
          taza,
        });
      });
    });
  });
};
