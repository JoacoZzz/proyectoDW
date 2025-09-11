import axios from "axios";

const apiURL = "http://localhost:5000";

export async function login(userData: { nombreAlumno: string, contraseña: string }) {
    try{

     
const response= await axios.post(`${apiURL}/login`, userData);
  
        return response.data;
   
   
     } catch(error){
        console.log(error)
    
    
        

    }
  }

  export async function registroAlumno(userData: { nombreAlumno: string, contraseña: string, modulo: string }) {
    try{

     
const response= await axios.post(`${apiURL}/api/alumnos`, userData);
  
        return response.data;
    }catch(error){
        console.log(error)
    }
    
        

  }

   