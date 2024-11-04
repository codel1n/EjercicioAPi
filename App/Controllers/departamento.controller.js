const Departamento = require('../Models/departamento.model');

exports.createDepartamento = async (req, res) => {
    const { id_departamento, descripcion } = req.body;
    const newDepartamento = await Departamento.create({ id_departamento, descripcion });
    res.status(201).json(newDepartamento);
};

exports.getAllDepartamentos = async (req, res) => {
    const departamentos = await Departamento.findAll();
    res.status(200).json(departamentos);
};

exports.getDepartamentoById = async (req, res) => {
    const { id } = req.params;
    const departamento = await Departamento.findByPk(id);
    res.status(departamento ? 200 : 404).json(departamento || { message: "Departamento no encontrado" });
};

exports.updateDepartamento = async (req, res) => {
    const { id } = req.params;
    const { descripcion } = req.body;
    const [updated] = await Departamento.update({ descripcion }, { where: { id_departamento: id } });
    res.status(updated ? 200 : 404).json(updated ? await Departamento.findByPk(id) : { message: "Departamento no encontrado" });
};

exports.deleteDepartamento = async (req, res) => {
    const { id } = req.params;
    const deleted = await Departamento.destroy({ where: { id_departamento: id } });
    res.status(deleted ? 200 : 404).json(deleted ? { message: "Departamento eliminado" } : { message: "Departamento no encontrado" });
};
