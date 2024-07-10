import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthenticationContextProvider } from './components/services/authentication/UserAuthenticationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
	<AuthenticationContextProvider>
    	<App />
    </AuthenticationContextProvider>
  </React.StrictMode>,
)
