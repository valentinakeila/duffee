import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesUser = ({ isSignedIn, isAdmin }) => {
    //si no está logueado se lo redirige al login
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
    //si está logueado y es Admin, lo redirige a la seccion para Admin
  if (isAdmin) {
    //asociar el Navigate to= con el nombre de ruta correspondiente
    return <Navigate to="/menuAdmin" replace />;
  }

  //Si está logueado y no es Admin retorna el Outlet y lo deja navegar por la sección de User
  return <Outlet />;
};

export default ProtectedRoutesUser;