'use client'
import React, { useEffect, useState } from 'react'


import { useUsuario } from '@/app/Provider/UserProvider';
import { useRouter } from 'next/navigation';

export default function InicioMaestro() {
const {usuario, setUsuario} = useUsuario();
console.log('Usuario en info', usuario)
const router=useRouter();
if (!usuario) {
  return <p> No hay usuario logueado</p>
}
  return (
    <div>
      <h2>Informacion de Maestro</h2>
      <table  cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Maestro</th>
            <th>Modulos</th>
             <th>Materias</th>
          </tr>
        </thead>
        <tbody>
          
            <tr>
             <td>{usuario?.id}</td>
             <td>{usuario?.nombreAlumno}</td>
             <td>{usuario?.modulos}</td>
             <td>{usuario?.materias}</td>
            
            </tr>
          
        </tbody>
      </table>
      <button className='button-btn-secondary' onClick={(e)=>{setUsuario(null);router.push('/login');}}>Cerrar Sesion</button>
    </div>
  );
};
  

