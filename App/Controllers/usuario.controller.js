const Usuario = require('../Models/usuario.model');

exports.createUsuario = async (req, res) => {
    const { nombre, correo, contraseña } = req.body;
    const newUsuario = await Usuario.create({ nombre, correo, contraseña });
    res.status(201).json(newUsuario);
};

exports.getAllUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    res.status(200).json(usuarios);
};

exports.getUsuarioById = async (req, res) => {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);
    res.status(usuario ? 200 : 404).json(usuario || { message: "Usuario no encontrado" });
};

exports.updateUsuario = async (req, res) => {
    const { id } = req.params;
    const { nombre, correo, contraseña } = req.body;
    const [updated] = await Usuario.update({ nombre, correo, contraseña }, { where: { id_usuario: id } });
    res.status(updated ? 200 : 404).json(updated ? await Usuario.findByPk(id) : { message: "Usuario no encontrado" });
};

exports.deleteUsuario = async (req, res) => {
    const { id } = req.params;
    const deleted = await Usuario.destroy({ where: { id_usuario: id } });
    res.status(deleted ? 200 : 404).json(deleted ? { message: "Usuario eliminado" } : { message: "Usuario no encontrado" });
};
