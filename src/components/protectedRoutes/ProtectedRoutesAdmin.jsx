import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/UserAuthenticationContext";

const ProtectedRoutesAdmin = () => {

  const { currentUser } = useContext(AuthenticationContext);

    //si no está logueado se lo redirige al login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
    //si está logueado, pero no es Admin, lo redirige a la seccion para usuarios
  if (!currentUser.adminRole) {
    //asociar el Navigate to= con el nombre de ruta correspondiente
    return <Navigate to="/menu" replace />;
  }

  //Si está logueado y además es Admin retorna el Outlet y lo deja navegar por la sección de Admin
  return <Outlet />;
};

export default ProtectedRoutesAdmin;