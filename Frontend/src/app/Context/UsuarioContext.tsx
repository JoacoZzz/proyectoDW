import { createContext } from "react";
import  {Usuario}  from "../Modelos/Usuario";

interface UsuarioContextType {
  usuario: Usuario | null;
  setUsuario: (user: Usuario | null)=> void 
}

export const  UsuarioContext= createContext<UsuarioContextType>({
    usuario:null,
    setUsuario: () =>{}
});