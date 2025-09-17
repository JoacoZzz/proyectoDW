import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Horario } from '@/types/Horario'
import SeleccionGrado from '@/components/SeleccionGrado'
import HorarioCard from '../../components/HorarioCard'

const Matricula: React.FC = () => {
  const navigate = useNavigate()
  const [grado, setGrado] = useState<number | ''>('')
  const [horarios, setHorarios] = useState<Horario[]>([])
  const [error, setError] = useState('')

  const baseHorarios: Record<number, Horario[]> = {
    1: [{ dia: 'Lunes', materia: 'Matemáticas', hora: '8:00' }],
    2: [{ dia: 'Martes', materia: 'Ciencias', hora: '9:00' }]
  }

  const obtenerHorarios = (g: number) => {
    setGrado(g)
    setHorarios(baseHorarios[g] || [])
    setError('')
  }

  const confirmarMatricula = () => {
    if (!grado) {
      setError('Seleccione un grado antes de confirmar.')
      return
    }
    navigate('/confirmacion', { state: { grado, horarios } })
  }

  return (
    <div>
      <h2>Proceso de Matrícula</h2>
      <SeleccionGrado grado={grado} onSeleccionar={obtenerHorarios} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {horarios.length > 0 && <HorarioCard horarios={horarios} />}
      <button onClick={confirmarMatricula}>Confirmar Matrícula</button>
    </div>
  )
}

export default Matricula