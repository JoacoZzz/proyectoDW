'use client'
import { useRouter } from 'next/navigation'

interface Materia {
  id: number
  nombre: string
  horario: string
}

export default function Matricula() {
  const router = useRouter()

function mostrarmaterias(){


}


  // Materias preasignadas para primer grado
  const materias: Materia[] = [
    { id: 1, nombre: 'Matemáticas', horario: '08:00 - 09:00' },
    { id: 2, nombre: 'Lengua y Literatura', horario: '09:00 - 10:00' },
    { id: 3, nombre: 'Ciencias Naturales', horario: '10:00 - 11:00' },
    { id: 4, nombre: 'Historia', horario: '11:00 - 12:00' },
    { id: 5, nombre: 'Educación Física', horario: '12:00 - 12:30' }, // recreo incluido
    { id: 6, nombre: 'Arte', horario: '12:30 - 13:00' },
    { id: 7, nombre: 'Música', horario: '13:00 - 13:30' },
    { id: 8, nombre: 'Inglés', horario: '13:30 - 14:00' },
    { id: 9, nombre: 'Computación', horario: '14:00 - 14:30' },
    { id: 10, nombre: 'Valores', horario: '14:30 - 15:00' },
  ]

  const confirmarMatricula = () => {
    // Aquí hay que guardar en la api
    alert('¡Matrícula completada automáticamente!')
    router.push('/inicioAlumno')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Matrícula</h1>
        <button
          onClick={() => router.push('/inicioAlumno')}
          className="bg-gray-800 hover:bg-gray-900 px-3 py-1 rounded-lg text-sm"
        >
          Volver
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 p-6">
        <h2 className="text-lg font-semibold mb-4">Tus materias asignadas:</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {materias.map(m => (
            <div
              key={m.id}
              className="p-4 border rounded-xl shadow bg-white hover:shadow-lg transition"
            >
              <h3 className="font-bold text-md">{m.nombre}</h3>
              <p className="text-sm text-gray-600">{m.horario}</p>
            </div>
          ))}
        </div>

        {/* Botón confirmar */}
        <div className="mt-6">
          <button
            onClick={confirmarMatricula}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg"
          >
            Confirmar Matrícula
          </button>
        </div>
      </main>
    </div>
  )
}
