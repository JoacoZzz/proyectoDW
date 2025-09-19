'use client'
import React, { JSX, useState } from 'react'

const containerStyle = {
  maxWidth: '600px',
  margin: '50px auto',
  padding: '30px',
  backgroundColor: '#e3f2fd',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
}

const tituloStyle = {
  textAlign: 'center' as const,
  fontSize: '26px',
  fontWeight: 'bold' as const,
  color: '#1976d2',
  marginBottom: '30px'
}

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  fontWeight: 'bold',
  color: '#0d47a1'
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '8px',
  border: '1px solid #90caf9',
  fontSize: '15px'
}

const botonStyle = {
  backgroundColor: '#43a047',
  color: '#fff',
  padding: '12px 20px',
  borderRadius: '8px',
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold' as const,
  width: '100%',
  fontSize: '16px'
}

export default function RegistroHorario(): JSX.Element {
  const [grado, setGrado] = useState('')
  const [dia, setDia] = useState('')
  const [hora, setHora] = useState('')
  const [materia, setMateria] = useState('')
  const [maestro, setMaestro] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ grado, dia, hora, materia, maestro })
    // Aquí podrías enviar los datos a una API o guardarlos en estado global
  }

  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>📋 Registro de nuevo horario</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle}>Grado</label>
        <input
          type="text"
          value={grado}
          onChange={(e) => setGrado(e.target.value)}
          placeholder="Ej. 3°"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Día</label>
        <input
          type="text"
          value={dia}
          onChange={(e) => setDia(e.target.value)}
          placeholder="Ej. Lunes"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Hora</label>
        <input
          type="text"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          placeholder="Ej. 8:00 a.m."
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Materia</label>
        <input
          type="text"
          value={materia}
          onChange={(e) => setMateria(e.target.value)}
          placeholder="Ej. Matemáticas"
          style={inputStyle}
          required
        />

        <label style={labelStyle}>Maestro asignado</label>
        <input
          type="text"
          value={maestro}
          onChange={(e) => setMaestro(e.target.value)}
          placeholder="Ej. Carlos Pérez"
          style={inputStyle}
          required
        />

        <button type="submit" style={botonStyle}>Registrar horario</button>
      </form>
    </div>
  )
}