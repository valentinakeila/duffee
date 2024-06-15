import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Landing from './pages/landing/Landing'
import Login from './pages/login/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
