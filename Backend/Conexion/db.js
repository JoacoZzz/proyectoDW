const {Sequelize} =require('sequelize');

const sequelize= new Sequelize(
    'escuela_proyecto',
    'root',
    'PPatitodehule456$$',
    {
        host:'localhost',
        port:3306,
        dialect:'mysql'
    }
)

sequelize.authenticate()
    .then(()=>console.log('Conexion establecida'))
    .catch((error)=> console.log('error de conexion' + error))

module.exports=sequelize;