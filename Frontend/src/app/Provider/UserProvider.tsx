'use client';
import React, { useContext, useEffect, useState } from 'react'
import { Plantilla } from '../Modelos/Plantilla'
import Usuario from '../Modelos/Usuario'
import { UsuarioContext } from '../Context/UsuarioContext';

export default function UserProvider({children}: Plantilla) {

    const [usuario, setUsuarioEstado]= useState<Usuario | null>(null);
    
    
    useEffect(() => {
       if (typeof window !== "undefined") {
        const guardado = window.localStorage.getItem('usuario');
       if (guardado) {
        try{
         return setUsuarioEstado(JSON.parse(guardado)) 
        }catch(e){
            console.log('Error parseando', e)
        }
    }
    
    }},[]);    
      
    
    function setUsuario(user:Usuario | null){
        setUsuarioEstado(user);
        if (user) {
            localStorage.setItem('usuario', JSON.stringify(user));
        }else{
            localStorage.removeItem('usuario');
        }
    }

  return (
    <UsuarioContext.Provider value={{usuario,setUsuario}} >
        {children}
    </UsuarioContext.Provider>
  );
}
export function useUsuario(){
    return useContext(UsuarioContext)
}