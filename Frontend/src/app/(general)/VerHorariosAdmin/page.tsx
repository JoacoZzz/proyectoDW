// Aqui tengo que hacer el front de la imagen que me mando Joaquien Cardiel//
import React from 'react'

const VerHorariosMaqueta: React.FC = () => {
  return (
    <div style={containerStyle}>
      <h2 style={tituloStyle}>VER HORARIOS</h2>

      {/* Botón desplegable */}
      <div style={dropdownContainer}>
        <label htmlFor="grado" style={labelStyle}>Lista de grados:</label>
        <select id="grado" style={selectStyle}>
          <option value="">-- Seleccione --</option>
          {[...Array(9)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}° grado
            </option>
          ))}
        </select>
      </div>

      {/* Área de horarios */}
      <div style={horariosBox}>
        <p style={placeholderText}>Horarios del grado según lista</p>
      </div>
    </div>
  )
}

export default VerHorariosMaqueta
const containerStyle = {
  maxWidth: '700px',
  margin: '50px auto',
  padding: '25px',
  borderRadius: '12px',
  background: 'linear-gradient(to bottom right, #e0f7fa, #e8f5e9)',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
}

const tituloStyle = {
  textAlign: 'center' as const,
  marginBottom: '30px',
  color: '#00796b', // Verde azulado vibrante
  fontSize: '28px',
  fontWeight: 'bold' as const,
  textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
}

const dropdownContainer = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '30px',
  gap: '10px'
}

const labelStyle = {
  fontWeight: 'bold',
  color: '#0288d1', // Azul cielo
  fontSize: '16px'
}

const selectStyle = {
  padding: '10px',
  borderRadius: '8px',
  border: '1px solid #0288d1',
  backgroundColor: '#ffffff',
  color: '#333',
  fontSize: '15px',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
}

const horariosBox = {
  backgroundColor: '#ffffff',
  border: '2px dashed #aed581', // Verde claro
  borderRadius: '10px',
  padding: '30px',
  textAlign: 'center' as const,
  boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)'
}

const placeholderText = {
  fontStyle: 'italic',
  color: '#607d8b', // Gris azulado
  fontSize: '16px'
}