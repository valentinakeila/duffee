import { useState } from 'react';
import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Landing from './pages/landing/Landing';
import LoginPage from './pages/login/LoginPage';
import Form from './pages/form/FormPage';
import Menu from './pages/menu/Menu';
import ShoppingCartPage from './components/shoppingCart/ShoppingCartPage';

import MenuItems from './pages/menuItems/MenuItems';

import MenuAdmin from "./pages/menuAdmin/MenuAdmin"
import MenuItemsAdmin from './pages/menuItemsAdmin/MenuItemsAdmin';

import PageNotFound from './components/pageNotFound/PageNotFound';
import ProtectedRoutesUser from './components/protectedRoutes/ProtectedRoutesUser';
import ProtectedRoutesAdmin from './components/protectedRoutes/ProtectedRoutesAdmin';
import Unauthorized from './components/unauthorized/Unauthorized';
import InDevelopPage from './components/inDevelop/InDevelopPage';
import FormPage from './pages/form/FormPage';
import OrdersAdmin from "./pages/ordersAdmin/OrdersAdmin"
import OrdersUser from './pages/ordersUser/OrdersUser';

function App() {

  

  const router = createBrowserRouter([
    //rutas públicas
    { path: "/", element: <Landing /> },
    { path: "/login", element: <LoginPage /> },
    {path: "/form", element: <FormPage/>},
    { path: "/menu", element: <Menu/>},
    { path: "/menu/:id", element: <MenuItems/>},
    { path: "/unauthorized", element: <Unauthorized /> },
    { path: "*", element: <PageNotFound/> },
    //rutas privadas...
    { path: "/user", element: <ProtectedRoutesUser />,
      children: [ //rutas privadas de user
        {
          path: "/user/shoppingCart", element: <ShoppingCartPage/>
        },
        { 
          path: "/user/orderList", element: <OrdersUser/>
        },
      ]    
    },
    { path: "/admin", element: <ProtectedRoutesAdmin />,
      children: [ //rutas privadas de admin
        {
          path: "/admin/menu", element: <MenuAdmin/>
        },
        { 
          path: "/admin/menu/:id", element: <MenuItemsAdmin/>
        },
        { 
          path: "/admin/orderList", element: <OrdersAdmin/>
        }
      ]
    },
  ]);

  
  return <RouterProvider router={router} />
}

export default App
