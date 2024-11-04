const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');

const Departamento = sequelize.define('Departamento', {
    id_departamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcion: {
        type: DataTypes.STRING(80),
        allowNull: false
    }
}, {
    tableName: 'departamento',
    timestamps: false
});

module.exports = Departamento;
