const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');
const Usuario = require('./usuario.model');

const Proyecto = sequelize.define('Proyecto', {
    id_proyecto: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_usuario: {
        type: DataTypes.INTEGER,
        references: {
            model: Usuario,
            key: 'id_usuario'
        }
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    descripción: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }
}, {
    tableName: 'proyectos',
    timestamps: false
});

module.exports = Proyecto;
