import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthenticationContext } from "../services/authentication/UserAuthenticationContext";

const ProtectedRoutesUser = () => {

  const { currentUser } = useContext(AuthenticationContext);

    //si no está logueado se lo redirige al login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }
    //si está logueado y es Admin, lo redirige a la seccion para Admin
  if (currentUser.adminRole) {
    //asociar el Navigate to= con el nombre de ruta correspondiente
    return <Navigate to="/menuAdmin" replace />;
  }

  //Si está logueado y no es Admin retorna el Outlet y lo deja navegar por la sección de User
  return <Outlet />;
};

export default ProtectedRoutesUser;