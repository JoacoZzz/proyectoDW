'use client'
import React, { useState } from 'react'
import { registroAlumno } from '@/app/Servicios/Api';
import { useRouter } from 'next/navigation';

export default function RegistroAlumno() {
  const [nombreAlumno, setNombreAlumno] = useState<string>('');
  const [contraseña, setContraseña] = useState<string>('');
  const [grado, setGrado] = useState<string>('');

  const [mensaje, setMensaje] = useState<string>('');
  const router = useRouter();

   const alumnosRegistros = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombreAlumno || !contraseña || !grado ) {
      setMensaje('Todos los campos son obligatorios');
      return;
    }
    const data= await registroAlumno({nombreAlumno,contraseña,grado});
  
    if(data.success===true){
    setMensaje('Registro exitoso');
    alert('Registro Exitoso')
    setTimeout(() => {
      router.push('/InicioAlumno'); 
    }, 1000);
    }else{
     setMensaje('Credenciales invalidas');
    alert('Credenciales invalidas')
    }
    
    
  };
 return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Registro de Alumno
        </h2>

        <form onSubmit={alumnosRegistros} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Nombre del Alumno
            </label>
            <input
              type="text"
              placeholder="Nombre Alumno"
              value={nombreAlumno}
              onChange={(e) => setNombreAlumno(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              ¿Grado a cursar?
            </label>
            <select
              value={grado}
              onChange={(e) => setGrado(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            >
              <option value= '1ro'>1ro</option>
              <option value= '2do'>2do</option>
              <option value= '3ro'>3ro</option>
              <option value= '4to'>4to</option>
              <option value= '5to'>5to</option>
              <option value= '6to'>6to</option>
              <option value= '7mo'>7mo</option>
              <option value= '8vo'>8vo</option>
              <option value= '9no'>9no</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition"
          >
            Registrar Alumno
          </button>
        </form>

        {mensaje && (
          <p className="text-center mt-4 text-sm text-gray-600">{mensaje}</p>
        )}

        <div className="mt-6 text-center">
          <button
            onClick={() => router.push('/login')}
            className="text-blue-500 hover:underline"
          >
            ¿Ya tienes cuenta? Inicia sesión
          </button>
        </div>
      </div>
    </div>
  );
}
