'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function InicioAlumno() {
  const router = useRouter();


  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-green-600 text-white p-4 flex justify-between items-center shadow">
        <h1 className="text-xl font-bold">Panel del Alumno</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded-lg text-sm"
        >
          Cerrar sesión
        </button>
      </header>

      {/* Main */}
      <main className="flex-1 p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Matricula */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Matricularme</h2>
          <p className="text-sm text-gray-600 mb-4">
            Accede al sistema de matrícula y selecciona tus asignaturas.
          </p>
          <button
            onClick={() => router.push('/matricula')} // aquí hay que poner la ruta de la pantalla de matricula
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Ir a matrícula
          </button>
        </div>

        {/* Ver horarios */}
        <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
          <h2 className="text-lg font-semibold mb-2">Ver mis horarios</h2>
          <p className="text-sm text-gray-600 mb-4">
            Consulta tu horario de clases asignado.
          </p>
          <button
            onClick={() => router.push('/misHorarios')} // aquí la ruta para ver los horarios matriculados
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Ver horarios
          </button>
        </div>

      </main>
    </div>
  );
}
