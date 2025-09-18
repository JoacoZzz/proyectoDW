const express = require('express');
const cors = require('cors');
const Alumno = require('./Modelos/Alumno');
const Maestro = require('./Modelos/Maestro');
const Administrador = require('./Modelos/Administrador');
const sequelize = require('./Conexion/db');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const Materias = require('./Modelos/Materias');
const app = express();
app.use(express.json());
app.use(cors());

app.post('/login', async(req,res)=> {

  try {
    const { nombreAlumno} = req.body;
 
    const  {contraseña} = req.body;

    const alumno = await Alumno.findOne({ where: { nombreAlumno } });
    const maestro = await Maestro.findOne({ where: { nombreAlumno } });
   const administrador = await Administrador.findOne({ where: { nombreAlumno } });


    if (alumno){
    const passwordAlumno = await bcrypt.compare(contraseña,alumno.contraseña);
  
    if(passwordAlumno){
    const tokenA = jwt.sign({ id: alumno.id, nombre: alumno.nombreAlumno }, 'contraseña_secreta', {
      expiresIn: '1h'
    });
    if(tokenA){
        return res.json({success:true, noUser:false, message: 'Login exitoso' ,data:alumno });
    
        }else{
            return res.json({success:false, message: 'Contraseña incorrecta', data:alumno });
        } 
    }else{
    return res.json({success:false, message: 'Usuarios no encontrado', data:alumno });
    } 

    }else if (maestro) {
        const passwordMaestro = await bcrypt.compare(contraseña, maestro.contraseña);
           
        if(passwordMaestro){
            const tokenM = jwt.sign({ id: maestro.id, nombre: maestro.nombreAlumno }, 'contraseña_secreta', {
          expiresIn: '1h'
        });      
       
        if(tokenM){
           return res.json({ad:true, noUser:true, success:false, message: 'Login exitoso',data: maestro });
        
            }else{
                return res.json({ ad: false, success:false, message: 'Contraseña incorrecta', data:maestro });
            }
        }else{
        return res.json({ad: false,success:false, message: 'Usuario no encontrado' ,data:maestro });
        } 
        } 
        else if(administrador) {
         const passwordAdministrador = await bcrypt.compare(contraseña, administrador.contraseña);
            if(passwordAdministrador){
        const tokenAd = jwt.sign({ id: administrador.id, nombre: administrador.nombre }, 'contraseña_secreta', {
          expiresIn: '1h'
        });
        
        if(tokenAd){
           return res.json({ad:true,success:true, noUser:true, message: 'Login exitoso', data:administrador });
        
            }else{
                return res.json({success:false,message: 'Contraseña incorrecta', data:administrador});
            }
        }else{
        return res.json({success:false, message: 'Usuario no encontrado', data:administrador });
        } 
        }else{
           return res.json({noUser:true, message: 'Usuario no encontrado'});
        }
        
  } catch (error) {
    res.status(500).json({ error: 'Error del servidor' + error.message });
  }
});

app.post('/api/maestros', async (req, res) => {
  try {
    const { nombreAlumno, contraseña, modulos,materias } = req.body;

    // Validación básica
    if (!nombreAlumno || !contraseña || !modulos || !materias) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

    
    const newMaestro = await Maestro.create({
      nombreAlumno,
      contraseña: hashedPassword, 
      modulos,
      materias
     
    });

    console.log(newMaestro);

    res.status(201).json({
      success:true,
      message: 'Usuario creado correctamente',
      user: {
        id: newMaestro.id,
        nombreAlumno: newMaestro.nombreAlumno,
        modulos: newMaestro.modulos,
        materias: newMaestro.materias
        
      
      }
    });

  } catch (error) {
    console.error('Error al crear maestro:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

  
   
    app.post('/api/alumnos', async (req, res) => {
  try {
    const { nombreAlumno, contraseña, grado} = req.body;

    // Validación básica
    if (!nombreAlumno || !contraseña || !grado) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

    
    const newAlumno = await Alumno.create({
      nombreAlumno,
      contraseña: hashedPassword, 
      grado
      
    });

    console.log(newAlumno);

    res.status(201).json({
      success:true,
      message: 'Usuario creado correctamente',
      user: {
        id: newAlumno.id,
        nombreAlumno: newAlumno.nombreAlumno,
        grado: newAlumno.grado
     
      
      }
    });

  } catch (error) {
    console.error('Error al crear alumno:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.post('/api/administrador', async (req, res) => {
  try { 
    const { nombreAlumno, contraseña } = req.body;

    // Validación básica
    if (!nombreAlumno || !contraseña) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Hashear la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(contraseña, saltRounds);

    
    const newAdministrador = await Administrador.create({
      nombreAlumno,
      contraseña: hashedPassword
      
    });

    console.log(newAdministrador);

    res.status(201).json({
      message: 'Usuario creado correctamente',
      user: {
        id: newAdministrador.id,
        nombreAlumno: newAdministrador.nombreAlumno
       
      }
    });

  } catch (error) {
    console.error('Error al crear administrador:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

  
//Get alumnos desde administrador
app.get('/alumnos-registrados', async (req, res) => {
  try {
    
    const alumnos = await Alumno.findAll(); 
   return res.json({ message: 'Listo', data:alumnos });

  } catch (error) {
    console.error('Error al buscar alumnos:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});
    
//Get de materias
app.get('/materias-matriculadas', async (req, res) => {
  try {
    const { grado} = req.body;
    const materias = await Materias.findOne({ where: { grado } }); 
   return res.json({ message: 'Listo', data:materias });

  } catch (error) {
    console.error('Error al buscar alumnos:', error);
    res.status(500).json({ error: 'Error del servidor' });
  }
});
    

app.listen(5000, () =>{
    console.log('Aplicacion Iniciada en el puerto 5000')
});
