const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');

const Empleado = sequelize.define('Empleado', {
    id_empleado: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    primer_nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    segundo_nombre: {
        type: DataTypes.STRING(100)
    },
    primer_apellido: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    segundo_apellido: {
        type: DataTypes.STRING(100)
    },
    nit: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    salario: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    estatus: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    id_departamento: {
        type: DataTypes.INTEGER,
        references: {
            model: 'departamento',
            key: 'id_departamento'
        }
    }
}, {
    tableName: 'empleado',
    timestamps: false
});

module.exports = Empleado;
