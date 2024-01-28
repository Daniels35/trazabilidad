const TazaDeTrazabilidadModel = require('../models/TazaDeTrazabilidadModel');

// Obtener todas las tazas de trazabilidad
exports.getAllTazas = (req, res) => {
  TazaDeTrazabilidadModel.getAll((err, tazas) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las tazas de trazabilidad' });
    }
    res.json(tazas);
  });
};

// Obtener una taza de trazabilidad por su ID (UUID)
exports.getTazaById = (req, res) => {
  const id = req.params.id;
  TazaDeTrazabilidadModel.getById(id, (err, taza) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener la taza de trazabilidad' });
    }
    res.json(taza);
  });
};

// Crear una nueva taza de trazabilidad
exports.createTaza = (req, res) => {
  const nuevaTaza = req.body;

  TazaDeTrazabilidadModel.create(nuevaTaza, (err, taza) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear la taza de trazabilidad' });
    }

    res.json({ message: 'Taza de trazabilidad agregada con éxito', taza });
  });
};

// Actualizar una taza de trazabilidad por su ID (UUID)
exports.updateTaza = (req, res) => {
  const id = req.params.id;
  const tazaActualizada = req.body;
  TazaDeTrazabilidadModel.update(id, tazaActualizada, (err, taza) => {
    if (err) {
      return res.status(500).json({ error: 'Error al actualizar la taza de trazabilidad' });
    }
    res.json({ message: 'Taza de trazabilidad actualizada con éxito', taza });
  });
};

// Eliminar una taza de trazabilidad por su ID (UUID)
exports.deleteTaza = (req, res) => {
  const id = req.params.id;
  TazaDeTrazabilidadModel.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al eliminar la taza de trazabilidad' });
    }
    res.json({ message: 'Taza de trazabilidad eliminada con éxito', result });
  });
};

// Obtener una taza de trazabilidad por su QrId
exports.getTazaByQrId = (req, res) => {
    const qrId = req.params.qrId;
    TazaDeTrazabilidadModel.getByQrId(qrId, (err, taza) => {
      if (err) {
        return res.status(500).json({ error: 'Error al obtener la taza de trazabilidad por QrId' });
      }
      res.json(taza);
    });
  };
  