import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Alumno } from '@/types/Alumno'
import { Horario } from '@/types/Horario'

const Confirmacion: React.FC = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { alumno, horarios } = state as { alumno: Alumno; horarios: Horario[] }

  const irABoleta = () => {
    navigate('/boleta', { state: { alumno, horarios } })
  }

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      {/* Banner de éxito */}
      <div
        style={{
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid #c3e6cb',
          marginBottom: '20px',
          textAlign: 'center',
          fontWeight: 'bold'
        }}
      >
        ✅ Matrícula realizada con éxito. El alumno ha sido inscrito en el grado seleccionado.
      </div>

      <h2>Confirmación de Matrícula</h2>

      <p><strong>Nombre del alumno:</strong> {alumno.nombre}</p>
      <p><strong>Grado matriculado:</strong> {alumno.grado}°</p>
      <p><strong>Fecha de nacimiento:</strong> {alumno.fechaNacimiento}</p>

      <h3>Clases asignadas:</h3>
      <ul>
        {horarios.map((h, i) => (
          <li key={i}>
            {h.dia} - {h.materia} ({h.hora})
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button onClick={irABoleta}>Ver Boleta de Matrícula</button>
      </div>
    </div>
  )
}

export default Confirmacion