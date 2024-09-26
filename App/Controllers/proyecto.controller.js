const Proyecto = require('../Models/proyecto.model');

exports.createProyecto = async (req, res) => {
    const { id_usuario, nombre, descripción } = req.body;
    const newProyecto = await Proyecto.create({ id_usuario, nombre, descripción });
    res.status(201).json(newProyecto);
};

exports.getAllProyectos = async (req, res) => {
    const proyectos = await Proyecto.findAll();
    res.status(200).json(proyectos);
};

exports.getProyectoById = async (req, res) => {
    const { id } = req.params;
    const proyecto = await Proyecto.findByPk(id);
    res.status(proyecto ? 200 : 404).json(proyecto || { message: "Proyecto no encontrado" });
};

exports.updateProyecto = async (req, res) => {
    const { id } = req.params;
    const { id_usuario, nombre, descripción } = req.body;
    const [updated] = await Proyecto.update({ id_usuario, nombre, descripción }, { where: { id_proyecto: id } });
    res.status(updated ? 200 : 404).json(updated ? await Proyecto.findByPk(id) : { message: "Proyecto no encontrado" });
};

exports.deleteProyecto = async (req, res) => {
    const { id } = req.params;
    const deleted = await Proyecto.destroy({ where: { id_proyecto: id } });
    res.status(deleted ? 200 : 404).json(deleted ? { message: "Proyecto eliminado" } : { message: "Proyecto no encontrado" });
};
