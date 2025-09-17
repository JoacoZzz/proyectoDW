import React from 'react'
import { Horario } from '../../types/Horario'

interface Props {
  horarios: Horario[]
}

const HorarioCard: React.FC<Props> = ({ horarios }) => (
  <div>
    <h3>Vista previa de clases:</h3>
    <ul>
      {horarios.map((h, i) => (
        <li key={i}>
          {h.dia} - {h.materia} ({h.hora})
        </li>
      ))}
    </ul>
  </div>
)

export default HorarioCard
