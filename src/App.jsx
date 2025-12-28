import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Login from './components/Login'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
