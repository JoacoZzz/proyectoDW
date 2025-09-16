'use client'
import AlumnosRegistrados from './(general)/AlumnosRegistrados/page';
import InicioAdmin from './(general)/InicioAdmin/page';
import InicioAlumno from './(general)/InicioAlumno/page';
import InicioMaestro from './(general)/InicioMaestro/page';
import LoginPage from './(general)/login/page';
import RegistroAlumno from './(general)/RegistroAlumno/page';
import UserProvider, { useUsuario } from './Provider/UserProvider';



export default function Home() {
  return (
  <UserProvider> 
    <LoginPage></LoginPage>
   <RegistroAlumno></RegistroAlumno>
   <InicioAlumno></InicioAlumno>
   <InicioAdmin></InicioAdmin>
   <InicioMaestro></InicioMaestro>
   <AlumnosRegistrados></AlumnosRegistrados>
  </UserProvider>
  );
}

