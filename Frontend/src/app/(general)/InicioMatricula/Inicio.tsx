import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Inicio: React.FC = () => {
  const navigate = useNavigate()
  const [rol, setRol] = useState<'maestro' | 'administrador' | ''>('')
  const [esNuevo, setEsNuevo] = useState(false)

  const continuar = () => {
    if (!rol) return alert('Seleccione un rol para continuar.')
    if (esNuevo) {
      navigate('/registro', { state: { rol } })
    } else {
      navigate('/login', { state: { rol } })
    }
  }

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h1>Bienvenido al sistema de matrícula escolar</h1>

      <label>Seleccione su rol:</label>
      <select value={rol} onChange={(e) => setRol(e.target.value as any)}>
        <option value="">-- Seleccione --</option>
        <option value="maestro">Maestro</option>
        <option value="administrador">Administrador</option>
      </select>

      <div style={{ marginTop: '15px' }}>
        <label>
          <input
            type="checkbox"
            checked={esNuevo}
            onChange={(e) => setEsNuevo(e.target.checked)}
          />
          ¿Es nuevo usuario?
        </label>
      </div>

      <button style={{ marginTop: '20px' }} onClick={continuar}>
        Continuar
      </button>
    </div>
  )
}

export default Inicio