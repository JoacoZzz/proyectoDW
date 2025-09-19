'use client'
import React, { JSX } from 'react'

const containerStyle = {
  maxWidth: '700px',
  margin: '50px auto',
  padding: '30px',
  backgroundColor: '#e8f5e9',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
}

const tituloStyle = {
  textAlign: 'center' as const,
  fontSize: '26px',
  fontWeight: 'bold' as const,
  color: '#2e7d32',
  marginBottom: '20px'
}

const textoStyle = {
  textAlign: 'center' as const,
  fontSize: '16px',
  color: '#555',
  marginBottom: '30px'
}

const listaStyle = {
  listStyleType: 'none' as const,
  padding: 0,
  marginBottom: '30px'
}

const itemStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #c8e6c9',
  borderRadius: '8px',
  padding: '12px',
  marginBottom: '10px',
  fontSize: '16px',
  color: '#424242'
}

export default function Matricula(): JSX.Element {
  const asignaturas = [
    'Español',
    'Matemáticas',
    'Ciencias Naturales',
    'Ciencias Sociales',
    'Cívica',
    'Inglés',
    'Dibujo',
    'Música',
    'Deporte',
    'Cocina'
  ]

  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>📚 Sistema de Matrícula</h2>
      <p style={textoStyle}>
        Selecciona tus asignaturas para el período escolar.
      </p>

      <ul style={listaStyle}>
        {asignaturas.map((materia, index) => (
          <li key={index} style={itemStyle}>
            {materia}
          </li>
        ))}
      </ul>

      <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#777' }}>
        * Esta vista es solo informativa. Puedes activar la selección real más adelante.
      </p>
    </div>
  )
}