const UbicacionesModel = require('../models/UbicacionesModel');

// Obtener todas las ubicaciones
exports.getAllUbicaciones = (req, res) => {
  UbicacionesModel.getAll((err, ubicaciones) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener las ubicaciones' });
    }
    res.json(ubicaciones);
  });
};

// Obtener una ubicación por su ID
exports.getUbicacionById = (req, res) => {
  const id = req.params.id;
  UbicacionesModel.getById(id, (err, ubicacion) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener la ubicación' });
    }
    res.json(ubicacion);
  });
};

// Crear una nueva ubicación
exports.createUbicacion = (req, res) => {
  const nuevaUbicacion = req.body;

  UbicacionesModel.create(nuevaUbicacion, (err, ubicacion) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear la ubicación' });
    }

    res.json({ message: 'Ubicación agregada con éxito', ubicacion });
  });
};

// Actualizar una ubicación por su ID
exports.updateUbicacion = (req, res) => {
  const id = req.params.id;
  const ubicacionActualizada = req.body;
  UbicacionesModel.update(id, ubicacionActualizada, (err, ubicacion) => {
    if (err) {
      return res.status(500).json({ error: 'Error al actualizar la ubicación' });
    }
    res.json({ message: 'Ubicación actualizada con éxito', ubicacion });
  });
};

// Eliminar una ubicación por su ID
exports.deleteUbicacion = (req, res) => {
  const id = req.params.id;
  UbicacionesModel.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al eliminar la ubicación' });
    }
    res.json({ message: 'Ubicación eliminada con éxito', result });
  });
};
