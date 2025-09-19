// Aqui tengo que hacer el front de la imagen que me mando Joaquien Cardiel//
'use client'
import React, { useState } from 'react'

// Datos base
const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes']
const horas = [
  '7:00 a.m.', '8:00 a.m.', '9:00 a.m.', '10:00 a.m.',
  '11:00 a.m.', '12:00 p.m.', '1:00 p.m.', '2:00 p.m.'
]

const materias = [
  'Español', 'Matemáticas', 'Ciencias Naturales', 'Ciencias Sociales',
  'Cívica', 'Inglés', 'Dibujo', 'Música', 'Deporte', 'Cocina'
]

// Genera horario base
const generarHorario = (): Record<string, string[]> => {
  const horario: Record<string, string[]> = {}
  dias.forEach((dia, i) => {
    horario[dia] = horas.map((_, j) => {
      const index = (i * horas.length + j) % materias.length
      return materias[index]
    })
  })
  return horario
}

const horario = generarHorario()

// Estilos básicos
const containerStyle = {
  maxWidth: '900px',
  margin: '40px auto',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '10px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
}

const tituloStyle = {
  textAlign: 'center' as const,
  marginBottom: '20px',
  color: '#2e7d32',
  fontSize: '24px'
}

const dropdownContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '30px'
}

const labelStyle = {
  marginRight: '10px',
  fontWeight: 'bold',
  color: '#0288d1',
  fontSize: '16px'
}

const selectStyle = {
  padding: '8px',
  borderRadius: '6px',
  border: '1px solid #0288d1',
  backgroundColor: '#ffffff',
  color: '#333',
  fontSize: '15px'
}

const tablaStyle = {
  width: '100%',
  borderCollapse: 'collapse' as const,
  backgroundColor: '#fff'
}

const thStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  backgroundColor: '#e0f2f1',
  textAlign: 'center' as const,
  fontWeight: 'bold' as const
}

const tdStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  textAlign: 'center' as const
}

// Componente principal
const HorarioOrganizado: React.FC = () => {
  const [gradoSeleccionado, setGradoSeleccionado] = useState('')

  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>VER HORARIOS</h2>

      {/* Dropdown */}
      <div style={dropdownContainer}>
        <label htmlFor="grado" style={labelStyle}>Lista de grados:</label>
        <select
          id="grado"
          value={gradoSeleccionado}
          onChange={(e) => setGradoSeleccionado(e.target.value)}
          style={selectStyle}
        >
          <option value="">-- Seleccione --</option>
          <option value="1">1° grado</option>
          <option value="2">2° grado</option>
          <option value="3">3° grado</option>
          <option value="4">4° grado</option>
          <option value="5">5° grado</option>
          <option value="6">6° grado</option>
          <option value="7">7° grado</option>
          <option value="8">8° grado</option>
          <option value="9">9° grado</option>
        </select>
      </div>

      {/* Tabla de horarios */}
      {gradoSeleccionado && (
        <table style={tablaStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Hora</th>
              {dias.map((dia) => (
                <th key={dia} style={thStyle}>{dia}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {horas.map((hora, i) => (
              <tr key={hora}>
                <td style={tdStyle}>{hora}</td>
                {dias.map((dia) => (
                  <td key={dia + i} style={tdStyle}>
                    {horario[dia][i]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default HorarioOrganizado