import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <Login /> },
    //more pages...
    //{ path: "*", element: <PageNotFound/> }
  ]);

  return <RouterProvider router={router} />

}

export default App
