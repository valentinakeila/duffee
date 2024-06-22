import { RouterProvider, createBrowserRouter} from 'react-router-dom';

import Landing from './pages/landing/Landing'
import LoginPage from './pages/login/LoginPage';


function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Landing /> },
    { path: "/login", element: <LoginPage /> },
    //more pages...
    //{ path: "*", element: <PageNotFound/> }
  ]);

  return <RouterProvider router={router} />

}

export default App
