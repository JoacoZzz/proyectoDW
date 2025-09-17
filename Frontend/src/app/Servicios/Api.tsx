import axios from "axios";
import { Usuario } from "../Modelos/Usuario";

const apiURL = "http://localhost:5000";

export async function login(userData: { nombreAlumno: string, contraseña: string }) {
    try{

     
const response= await axios.post<{success:boolean;noUser:boolean; ad:boolean;data:Usuario}>(`${apiURL}/login`, userData);
  
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



  export async function getTodosAlumnos() {
    try{

     
const response= await axios.get(`${apiURL}/alumnos-registrados`);
  
        return response.data;
   
   
     } catch(error){
        console.log(error)
    
    }
  }
