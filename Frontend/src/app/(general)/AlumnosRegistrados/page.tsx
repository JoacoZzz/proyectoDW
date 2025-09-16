'use client'
import { Alumno } from '@/app/Modelos/Alumno';
import Usuario from '@/app/Modelos/Usuario';
import { getTodosAlumnos } from '@/app/Servicios/Api'
import React, { useEffect, useState } from 'react'

export default function AlumnosRegistrados() {

    const [alumno,setAlumno]= useState<Alumno[]>([]);

      useEffect(() => {
  const fetch = async () => {
    const data = await getTodosAlumnos();
    console.log('Datos recibidos:', data)
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 const datosTransformados: Alumno[] = data.data.map((a: any) => ({
  id: a.id,
  nombreAlumno: a.nombreAlumno,
  contraseña: a.contraseña,
  modulo: typeof a.modulo === 'object' ? a.modulo.nombre : a.modulo || 'Sin módulo',
}));

setAlumno(datosTransformados);
    
  };
  fetch();
}, []);

     
  return (
    <div>
      <h2>Informacion de Maestro</h2>
      <table  cellPadding="8" cellSpacing="0">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre del Alumno</th>
            <th>Contraseña</th>
            <th>Modulo</th>
           
          </tr>
        </thead>
        <tbody >
         {alumno.map((registro) => (
    <tr key={registro.id}>
      <td>{registro.id}</td>
      <td>{registro.nombreAlumno}</td>
    <td>{registro.contraseña}</td>
      <td>{registro.modulo}</td>
    </tr>
  ))}
         
        </tbody>
      </table>
    </div>
  )
}
