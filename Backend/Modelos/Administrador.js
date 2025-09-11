const { DataTypes } = require('sequelize');
const sequelize = require('../Conexion/db');

const Administrador = sequelize.define('administrador', {
    
    nombreAlumno: {
        type: DataTypes.STRING
    },

    contraseña: {
        type: DataTypes.STRING
    }
},
    {
        tableName: 'administrador',
        timestamps: false
    }
)

module.exports=Administrador;