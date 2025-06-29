const Especialidad = require('../models/especialidad');

// Obtener todas las especialidades
exports.getAll = async (req, res) => {
    try {
        const especialidades = await Especialidad.findAll();
        res.json(especialidades);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Obtener una especialidad por ID
exports.getOne = async (req, res) => {
    try {
        const especialidad = await Especialidad.findByPk(req.params.CodEspec);
        if (!especialidad) return res.status(404).json({ message: 'No encontrado' });
        res.json(especialidad);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Crear una nueva especialidad
exports.create = async (req, res) => {
    try {
        const nueva = await Especialidad.create(req.body);
        res.status(201).json(nueva);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Actualizar una especialidad
exports.update = async (req, res) => {
    try {
        const actualizado = await Especialidad.update(req.body, {
            where: { CodEspec: req.params.CodEspec }
        });
        if (actualizado[0] === 0) return res.status(404).json({ message: 'No encontrado' });
        res.json({ message: 'Actualizado correctamente' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Eliminar una especialidad
exports.remove = async (req, res) => {
    try {
        const eliminado = await Especialidad.destroy({
            where: { CodEspec: req.params.CodEspec }
        });
        if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
        res.sendStatus(204);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};