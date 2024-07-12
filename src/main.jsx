import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthenticationContextProvider } from './components/services/authentication/UserAuthenticationContext.jsx'
import { ShoppingCartContextProvider } from './components/services/shoppingCartContext/UserShoppingCartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	  <AuthenticationContextProvider>
      <ShoppingCartContextProvider>
        <App />
      </ShoppingCartContextProvider>
    </AuthenticationContextProvider>
  </React.StrictMode>,
)
