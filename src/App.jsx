import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Landing from './pages/landing/Landing'
import LoginPage from './pages/login/LoginPage';
import Menu from './pages/menu/Menu';

import MenuAdmin from "./pages/menuAdmin/MenuAdmin"
import { useState } from 'react';

function App() {

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
  ])

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/menu", element: <Menu menuCategories={menuCategories}/> },
    //more pages...
    //{ path: "*", element: <PageNotFound/> }

    { path: "/menuAdmin", element: <MenuAdmin menuCategories={menuCategories}  setMenuCategories={setMenuCategories}/> },
  ]);

  return <RouterProvider router={router} />

}

export default App
