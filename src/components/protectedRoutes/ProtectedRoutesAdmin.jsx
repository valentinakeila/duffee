import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutesAdmin = ({ isSignedIn, isAdmin }) => {
    //si no está logueado se lo redirige al login
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
    //si está logueado, pero no es Admin, lo redirige a la seccion para usuarios
  if (!isAdmin) {
    //asociar el Navigate to= con el nombre de ruta correspondiente
    return <Navigate to="/menu" replace />;
  }

  //Si está logueado y además es Admin retorna el Outlet y lo deja navegar por la sección de Admin
  return <Outlet />;
};

export default ProtectedRoutesAdmin;