import { useState } from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Landing from './pages/landing/Landing'
import LoginPage from './pages/login/LoginPage';
import PageNotFound from './components/pageNotFound/PageNotFound'
import ProtectedRoutesUser from './components/protectedRoutes/ProtectedRoutesUser';
import ProtectedRoutesAdmin from './components/protectedRoutes/ProtectedRoutesAdmin';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  const [isAdmin, setIsAdmin] = useState(false);
  console.log(isAdmin);

  const loginHandler = () => {
    //seguramente tengamos que modificar este if para que cambie el estado
    //sólo si el usuario existe en la base de datos y el response retorna un 200
    if (!isLoggedIn) {
      setIsLoggedIn(true);
    }

    /*
      Aquí va un if... para cuando nos llega la response poder validar si el usuario
      logueado es Admin o no, para así poder setear a true el estado de isAdmin si
      es necesario   
    */

  };

  const router = createBrowserRouter([
    //rutas públicas
    { path: "/", element: <Landing /> },
    { path: "/login", element: <LoginPage onLogin={loginHandler}/> },
    { path: "*", element: <PageNotFound/> },
    //rutas privadas...(renombrar según corresponda)
    { path: "/rutaadmin", element: <ProtectedRoutesAdmin isSignedIn={isLoggedIn} isAdmin={isAdmin}/>,
      children: [
        {
          //hacer coincidir esta ruta con la del componente ProtectedRoutesAdmin
          path: "/rutaadmin", element: "Componente de Menu de Admin"
        },
        //agregar aquí las rutas anidadas de Admin
      ]
    },
    { path: "/rutauser", element: <ProtectedRoutesUser isSignedIn={isLoggedIn} isAdmin={isAdmin}/>,
      children: [
        {
          //hacer coincidir esta ruta con la del componente ProtectedRoutesUser
          path: "/rutauser", element: "Componente de Menu de Usuario"
        },
        //Agregar aquí las rutas anidadas de User
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App