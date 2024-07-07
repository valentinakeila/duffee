import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Landing from './pages/landing/Landing'
import LoginPage from './pages/login/LoginPage';
import Menu from './pages/menu/Menu';
import MenuItems from './pages/menuItems/MenuItems';

import MenuAdmin from "./pages/menuAdmin/MenuAdmin"
import { useState } from 'react';
import MenuItemsAdmin from './pages/menuItemsAdmin/MenuItemsAdmin';



function App() {

  const [menuCategories,setMenuCategories] = useState([
    {
      name:"Desayunos",
      imageUrl:"https://images.unsplash.com/photo-1584450149783-8073785c47f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9),
      items: [{
        name:"Clasico",
        imageUrl:"https://images.unsplash.com/photo-1584450149783-8073785c47f9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3& ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        price:1000,
        id:Math.random().toString(36).substr(2, 9),
        desc:"infusión + 2 Bizcochos o Medialunas saladas/dulces\n",
      },{
        name:"Dulce",
        imageUrl:"https://images.cookforyourlife.org/wp-content/uploads/2020/06/Dark-Chocolate-Brownies-shutterstock_112430981.jpg",
        price:10000,
        id:Math.random().toString(36).substr(2, 9),
        desc:"infusión + Brownie de chocolate",
      },{
        name:"Clasico Tostado",
        imageUrl:"https://media.diariouno.com.ar/p/92d297a8a5b04498d407c595b48982f0/adjuntos/298/imagenes/008/616/0008616976/receta-tostado-jamon-y-quesojpg.jpg",
        price:10000,
        id:Math.random().toString(36).substr(2, 9),
        desc:"infusión + Tostado de jamon y queso",
      }]
    },
    {
      name:"Almuerzo",
      imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTFlYjOZNwya2KTfdOk8HYyQRJVapkrQY-xIN1HLRIvxcIkdwYj8TBj-FNumqlyioAF9w&usqp=CAU"
      ,
      id:Math.random().toString(36).substr(2, 9),
      items: []
    },
    {
      name:"Cafeteria",
      imageUrl:"https://images.unsplash.com/photo-1494415859740-21e878dd929d?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9),
      items: []
    },
    {
      name:"Postres",
      imageUrl:"https://images.unsplash.com/photo-1561845730-208ad5910553?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9),
      items: []
    },
    {
      name:"Bebidas",
      imageUrl:"https://images.unsplash.com/photo-1614432807303-16ff46aefc8e?q=80&w=1486&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      id:Math.random().toString(36).substr(2, 9),
      items: []
    },
    {
      name:"Para compartir",
      imageUrl:"https://i.ytimg.com/vi/XCENOkjqI8c/maxresdefault.jpg",
      id:Math.random().toString(36).substr(2, 9),
      items: []
    }
  ])

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/menu", element: <Menu menuCategories={menuCategories}/> },
    { path: "/menu/:id", element: <MenuItems menuCategories={menuCategories}/> },
    //more pages...
    //{ path: "*", element: <PageNotFound/> }

    { path: "/menuAdmin", element: <MenuAdmin menuCategories={menuCategories}  setMenuCategories={setMenuCategories}/> },
    { path: "/menuAdmin/:id", element: <MenuItemsAdmin menuCategories={menuCategories}  setMenuCategories={setMenuCategories}/> },
  ]);

  return <RouterProvider router={router} />

}

export default App
