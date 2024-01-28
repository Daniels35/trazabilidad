const EstadoModel = require('../models/EstadoModel');

// Obtener todos los estados
exports.getAllEstados = (req, res) => {
  EstadoModel.getAll((err, estados) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener los estados' });
    }
    res.json(estados);
  });
};

// Obtener un estado por su ID
exports.getEstadoById = (req, res) => {
  const id = req.params.id;
  EstadoModel.getById(id, (err, estado) => {
    if (err) {
      return res.status(500).json({ error: 'Error al obtener el estado' });
    }
    res.json(estado);
  });
};

// Crear un nuevo estado
exports.createEstado = (req, res) => {
  const nuevoEstado = req.body;

  EstadoModel.create(nuevoEstado, (err, estado) => {
    if (err) {
      return res.status(500).json({ error: 'Error al crear el estado' });
    }

    res.json({ message: 'Estado agregado con éxito', estado });
  });
};

// Actualizar un estado por su ID
exports.updateEstado = (req, res) => {
  const id = req.params.id;
  const estadoActualizado = req.body;
  EstadoModel.update(id, estadoActualizado, (err, estado) => {
    if (err) {
      return res.status(500).json({ error: 'Error al actualizar el estado' });
    }
    res.json({ message: 'Estado actualizado con éxito', estado });
  });
};

// Eliminar un estado por su ID
exports.deleteEstado = (req, res) => {
  const id = req.params.id;
  EstadoModel.delete(id, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error al eliminar el estado' });
    }
    res.json({ message: 'Estado eliminado con éxito', result });
  });
};
