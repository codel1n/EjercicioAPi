const Empleado = require('../Models/empleado.model');

exports.createEmpleado = async (req, res) => {
    const { id_empleado, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, nit, salario, estatus, id_departamento } = req.body;
    const newEmpleado = await Empleado.create({ id_empleado, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, nit, salario, estatus, id_departamento });
    res.status(201).json(newEmpleado);
};

exports.getAllEmpleados = async (req, res) => {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
};

exports.getEmpleadoById = async (req, res) => {
    const { id } = req.params;
    const empleado = await Empleado.findByPk(id);
    res.status(empleado ? 200 : 404).json(empleado || { message: "Empleado no encontrado" });
};

exports.updateEmpleado = async (req, res) => {
    const { id } = req.params;
    const { primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, nit, salario, estatus, id_departamento } = req.body;
    const [updated] = await Empleado.update({ primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, nit, salario, estatus, id_departamento }, { where: { id_empleado: id } });
    res.status(updated ? 200 : 404).json(updated ? await Empleado.findByPk(id) : { message: "Empleado no encontrado" });
};

exports.deleteEmpleado = async (req, res) => {
    const { id } = req.params;
    const deleted = await Empleado.destroy({ where: { id_empleado: id } });
    res.status(deleted ? 200 : 404).json(deleted ? { message: "Empleado eliminado" } : { message: "Empleado no encontrado" });
};
