const { DataTypes } = require('sequelize');
const sequelize = require('../Conexion/db');

const Materias = sequelize.define('materias', {
    
    nombre: {
        type: DataTypes.STRING
    },
    dia: {
        type: DataTypes.STRING
    },
    hora: {
        type: DataTypes.STRING
    },
    grado: {
        type: DataTypes.STRING
    }
    
},
    {
        tableName: 'maaterias',
        timestamps: false
    }
)

module.exports=Materias;