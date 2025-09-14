'use client'
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
    <InicioAlumno></InicioAlumno>
    <InicioAdmin></InicioAdmin>
    <Home></Home>
    <InicioMaestro></InicioMaestro>
    <RegistroAlumno></RegistroAlumno>
  </UserProvider>
  );
}

