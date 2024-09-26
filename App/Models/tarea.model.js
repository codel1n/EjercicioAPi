const { DataTypes } = require('sequelize');
const sequelize = require('../Config/dbconfig');
const Proyecto = require('./proyecto.model');

const Tarea = sequelize.define('Tarea', {
    id_tarea: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    id_proyecto: {
        type: DataTypes.INTEGER,
        references: {
            model: Proyecto,
            key: 'id_proyecto'
        }
    },
    nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    fecha_creacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    fecha_vencimiento: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'tareas',
    timestamps: false
});

module.exports = Tarea;
