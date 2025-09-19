'use client'
import { Alumno } from '@/app/Modelos/Alumno'
import { getTodosAlumnos } from '@/app/Servicios/Api'
import React, { JSX, useEffect, useState } from 'react'

export default function AlumnosRegistrados(): JSX.Element {
  const [alumno, setAlumno] = useState<Alumno[]>([])

  useEffect(() => {
    const fetch = async () => {
      const data = await getTodosAlumnos()
      console.log('Datos recibidos:', data)

      const datosTransformados: Alumno[] = data.data.map((a: any) => ({
        id: a.id,
        nombreAlumno: a.nombreAlumno,
        contraseña: a.contraseña,
        modulo: typeof a.modulo === 'object' ? a.modulo.nombre : a.modulo || 'Sin módulo'
      }))

      setAlumno(datosTransformados)
    }

    fetch()
  }, [])

  // 🎨 Estilos
  const containerStyle = {
    maxWidth: '900px',
    margin: '40px auto',
    padding: '30px',
    backgroundColor: '#f1f8e9',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  }

  const tituloStyle = {
    textAlign: 'center' as const,
    fontSize: '26px',
    fontWeight: 'bold' as const,
    color: '#2e7d32',
    marginBottom: '30px'
  }

  const tablaStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    backgroundColor: '#ffffff'
  }

  const thStyle = {
    padding: '12px',
    border: '1px solid #c8e6c9',
    backgroundColor: '#a5d6a7',
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    color: '#1b5e20'
  }

  const tdStyle = {
    padding: '10px',
    border: '1px solid #e0e0e0',
    textAlign: 'center' as const,
    color: '#424242'
  }

  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>📘 Información de Alumnos Registrados</h2>

      <table style={tablaStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Nombre del Alumno</th>
            <th style={thStyle}>Contraseña</th>
            <th style={thStyle}>Módulo</th>
          </tr>
        </thead>
        <tbody>
          {alumno.map((registro) => (
            <tr key={registro.id}>
              <td style={tdStyle}>{registro.id}</td>
              <td style={tdStyle}>{registro.nombreAlumno}</td>
              <td style={tdStyle}>{registro.contraseña}</td>
              <td style={tdStyle}>{registro.modulo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
