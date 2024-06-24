import { useState } from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Landing from './pages/landing/Landing';
import LoginPage from './pages/login/LoginPage';
import Menu from './pages/menu/Menu';
import PageNotFound from './components/pageNotFound/PageNotFound';
import ProtectedRoutesUser from './components/protectedRoutes/ProtectedRoutesUser';

import MenuAdmin from "./pages/menuAdmin/MenuAdmin";
import ProtectedRoutesAdmin from './components/protectedRoutes/ProtectedRoutesAdmin';


function App() {

  const initialUsers = [
    {
      id: 1,
      name: "Manuel Cecarelli",
      email: "manuelcecarelli@gmail.com",
      password: "manu123",
      adminRole: true
    },
    {
      id: 2,
      name: "Nicolas Cataldi",
      email: "nicolascataldi@gmail.com",
      password: "nico123",
      adminRole: false
    },
    {
      id: 3,
      name: "Valentina Garrido",
      email: "valentinagarrido@gmail.com",
      password: "valen123",
      adminRole: false
    }
  ]

  const [menuCategories,setMenuCategories] = useState([
    {
      name:"Desayunos",
      imageUrl:"https://images.unsplash.com/photo-1584450149783-8073785c47f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9)
    },
    {
      name:"Almuerzo",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFlYjOZNwya2KTfdOk8HYyQRJVapkrQY-xIN1HLRIvxcIkdwYj8TBj-FNumqlyioAF9w&usqp=CAU"
      ,
      id:Math.random().toString(36).substr(2, 9)
    },
    {
      name:"Cafeteria",
      imageUrl:"https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9)
    },
    {
      name:"Postres",
      imageUrl:"https://images.unsplash.com/photo-1561845730-208ad5910553?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9)
    },
    {
      name:"Bebidas",
      imageUrl:"https://images.unsplash.com/photo-1614432807303-16ff46aefc8e?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9)
    },
    {
      name:"Para compartir",
      imageUrl:"https://i.ytimg.com/vi/XCENOkjqI8c/maxresdefault.jpg",
      id:Math.random().toString(36).substr(2, 9)
    }
  ]);
  const [usersStored, setUsersArray] = useState(initialUsers);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const loginHandler = (email, password) => {

    const auxUser = usersStored.find(user => user.email == email);
    console.log(auxUser);

    if (auxUser) {
      if (auxUser.password == password) {
        setIsLoggedIn(true);
        if (auxUser.adminRole) {
          setIsAdmin(true);
        }
        return true;
      }    
    } else {
      return false;
    }
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  const router = createBrowserRouter([
    //rutas públicas
    { path: "/", element: <Landing /> },
    { path: "/login", element: <LoginPage onLogin={loginHandler}/> },
    { path: "*", element: <PageNotFound/> },
    //rutas privadas...
    { path: "/menu", element: <ProtectedRoutesUser isSignedIn={isLoggedIn} isAdmin={isAdmin}/>,
      children: [
        {
          //hacer coincidir esta ruta con la del componente ProtectedRoutesUser
          path: "/menu", element: <Menu menuCategories={menuCategories}/>
        },
        //Agregar aquí las rutas anidadas de User
      ]    
    },
    { path: "/menuAdmin", element: <ProtectedRoutesAdmin isSignedIn={isLoggedIn} isAdmin={isAdmin}/>,
      children: [
        {
          //hacer coincidir esta ruta con la del componente ProtectedRoutesAdmin
          path: "/menuAdmin", element: <MenuAdmin menuCategories={menuCategories} setMenuCategories={setMenuCategories}/>
        },
        //agregar aquí las rutas anidadas de Admin
      ]
    },
  ]);

  return <RouterProvider router={router} />
}

export default App
