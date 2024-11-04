const Cliente = require('../Models/cliente.model');

exports.createCliente = async (req, res) => {
    const { id_cliente, nombre, apellido, razon_social, nit, direccion, telefono, email, fecha_ingreso, estatus } = req.body;
    const newCliente = await Cliente.create({ id_cliente, nombre, apellido, razon_social, nit, direccion, telefono, email, fecha_ingreso, estatus });
    res.status(201).json(newCliente);
};

exports.getAllClientes = async (req, res) => {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
};

exports.getClienteById = async (req, res) => {
    const { id } = req.params;
    const cliente = await Cliente.findByPk(id);
    res.status(cliente ? 200 : 404).json(cliente || { message: "Cliente no encontrado" });
};

exports.updateCliente = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido, razon_social, nit, direccion, telefono, email, fecha_ingreso, estatus } = req.body;
    const [updated] = await Cliente.update({ nombre, apellido, razon_social, nit, direccion, telefono, email, fecha_ingreso, estatus }, { where: { id_cliente: id } });
    res.status(updated ? 200 : 404).json(updated ? await Cliente.findByPk(id) : { message: "Cliente no encontrado" });
};

exports.deleteCliente = async (req, res) => {
    const { id } = req.params;
    const deleted = await Cliente.destroy({ where: { id_cliente: id } });
    res.status(deleted ? 200 : 404).json(deleted ? { message: "Cliente eliminado" } : { message: "Cliente no encontrado" });
};
