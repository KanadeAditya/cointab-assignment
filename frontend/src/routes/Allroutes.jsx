import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Userdetails from '../pages/Userdetails'

function Allroutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/userdetails' element={<Userdetails/>} />
    </Routes>
  )
}

export default Allroutes