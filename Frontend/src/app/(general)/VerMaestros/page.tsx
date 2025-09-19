'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const maestros = [
  { nombre: 'María López', materia: 'Español' },
  { nombre: 'Carlos Pérez', materia: 'Matemáticas' },
  { nombre: 'Ana Torres', materia: 'Ciencias Naturales' },
  { nombre: 'Luis Gómez', materia: 'Ciencias Sociales' },
  { nombre: 'Sofía Ramírez', materia: 'Cívica' },
  { nombre: 'Daniela Cruz', materia: 'Inglés' },
  { nombre: 'Jorge Martínez', materia: 'Dibujo' },
  { nombre: 'Valeria Mendoza', materia: 'Música' },
  { nombre: 'Esteban Reyes', materia: 'Deporte' },
  { nombre: 'Lucía Fernández', materia: 'Cocina' }
]

const cardStyle = {
  backgroundColor: '#e3f2fd',
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  marginBottom: '20px',
  textAlign: 'center' as const
}

const containerStyle = {
  maxWidth: '800px',
  margin: '40px auto',
  padding: '20px'
}

const tituloStyle = {
  textAlign: 'center' as const,
  fontSize: '28px',
  fontWeight: 'bold' as const,
  color: '#1976d2',
  marginBottom: '30px'
}

const botonStyle = {
  backgroundColor: '#4caf50',
  color: '#fff',
  padding: '10px 20px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold' as const,
  marginBottom: '30px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
}

export default function VerMaestros() {
  const router = useRouter()

  const irARegistro = () => {
    router.push('/admin/RegistroMaestro')
  }

  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>👩‍🏫 Lista de Maestros</h2>

      {maestros.map((maestro, index) => (
        <div key={index} style={cardStyle}>
          <h3 style={{ fontSize: '20px', color: '#0d47a1' }}>{maestro.nombre}</h3>
          <p style={{ fontSize: '16px', color: '#424242' }}>Materia: {maestro.materia}</p>
        </div>
      ))}
    </div>
  )
}