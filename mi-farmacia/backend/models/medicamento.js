const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Especialidad = require('./especialidad');

const Medicamento = sequelize.define('Medicamento', {
    CodMedicamento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descripcionMed: {
        type: DataTypes.STRING,
        allowNull: false
    },
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    precioVentaUni: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },
    CodEspec: {
        type: DataTypes.INTEGER,
        references: {
            model: Especialidad,
            key: 'CodEspec'
        }
    }
}, {
    tableName: 'Medicamento',
    timestamps: false
});

Medicamento.belongsTo(Especialidad, { foreignKey: 'CodEspec' });
Especialidad.hasMany(Medicamento, { foreignKey: 'CodEspec' });

module.exports = Medicamento;