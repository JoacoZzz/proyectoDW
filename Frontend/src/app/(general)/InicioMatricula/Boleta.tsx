import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Alumno } from '@/types/Alumno'
import { Horario } from '@/types/Horario'

const Boleta: React.FC = () => {
  const { state } = useLocation()
  const { alumno, horarios } = state as { alumno: Alumno; horarios: Horario[] }

  const imprimir = () => {
    window.print()
  }

  useEffect(() => {
    document.title = 'Boleta de Matrícula'
  }, [])

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px', border: '1px solid #ccc' }}>
      <h2 style={{ textAlign: 'center' }}>Boleta de Matrícula</h2>
      <p><strong>Nombre del alumno:</strong> {alumno.nombre}</p>
      <p><strong>Grado matriculado:</strong> {alumno.grado}°</p>
      <p><strong>Fecha de nacimiento:</strong> {alumno.fechaNacimiento}</p>
      <h3>Clases asignadas:</h3>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Día</th>
            <th>Materia</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {horarios.map((h, i) => (
            <tr key={i}>
              <td>{h.dia}</td>
              <td>{h.materia}</td>
              <td>{h.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <button onClick={imprimir}>Imprimir Boleta</button>
      </div>
    </div>
  )
}

export default Boleta