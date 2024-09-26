const Tarea = require('../Models/tarea.model');

exports.createTarea = async (req, res) => {
    const { id_proyecto, nombre, estado, fecha_vencimiento } = req.body;
    const newTarea = await Tarea.create({ id_proyecto, nombre, estado, fecha_vencimiento });
    res.status(201).json(newTarea);
};

exports.getAllTareas = async (req, res) => {
    const tareas = await Tarea.findAll();
    res.status(200).json(tareas);
};

exports.getTareaById = async (req, res) => {
    const { id } = req.params;
    const tarea = await Tarea.findByPk(id);
    res.status(tarea ? 200 : 404).json(tarea || { message: "Tarea no encontrada" });
};

exports.updateTarea = async (req, res) => {
    const { id } = req.params;
    const { id_proyecto, nombre, estado, fecha_vencimiento } = req.body;
    const [updated] = await Tarea.update({ id_proyecto, nombre, estado, fecha_vencimiento }, { where: { id_tarea: id } });
    res.status(updated ? 200 : 404).json(updated ? await Tarea.findByPk(id) : { message: "Tarea no encontrada" });
};

exports.deleteTarea = async (req, res) => {
    const { id } = req.params;
    const deleted = await Tarea.destroy({ where: { id_tarea: id } });
    res.status(deleted ? 200 : 404).json(deleted ? { message: "Tarea eliminada" } : { message: "Tarea no encontrada" });
};
