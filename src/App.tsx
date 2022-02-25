import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/index'
import CriarContato from './pages/CriarContato'
import Listar from './pages/Listar'
import ListarTelefones from './pages/Telefones'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route  path='/'  element={<Listar/>} />
        <Route path='/criar'  element={<CriarContato/>} />
        <Route path='/telefones'  element={<ListarTelefones />} />
      </Routes>
    </BrowserRouter>
  )
}
  
export default App;
