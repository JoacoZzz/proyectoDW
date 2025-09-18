import { createContext } from "react";
import  {Usuario}  from "../Modelos/Usuario";

interface UsuarioContextType {
  usuario: Usuario | null;
  setUsuario: (user: Usuario | null)=> void;
  grado: string;  
}

export const  UsuarioContext= createContext<UsuarioContextType>({
    usuario:null,
    grado:'' as string,
    setUsuario: () =>{}
});
