import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Landing from './pages/landing/Landing'
import Menu from './pages/menu/Menu'
import Desayunos from './pages/menu/Desayunos'
import Postres from './pages/menu/Postres'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>}/>

        <Route path='/menu' element={<Menu/>}/>
        <Route path='/menu/desayunos' element={<Desayunos/>}/>
        <Route path='/menu/postres' element={<Postres/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
