import React from 'react'

interface Props {
  grado: number | ''
  onSeleccionar: (grado: number) => void
}

const SeleccionGrado: React.FC<Props> = ({ grado, onSeleccionar }) => {
  return (
    <div>
      <label>Seleccione el grado:</label>
      <select
        value={grado}
        onChange={(e) => onSeleccionar(Number(e.target.value))}
      >
        <option value="">-- Seleccione --</option>
        {[...Array(9)].map((_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}° grado
          </option>
        ))}
      </select>
    </div>
  )
}

export default SeleccionGrado
