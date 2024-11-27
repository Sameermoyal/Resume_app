import React from 'react'
import Home from "./component/Home/Home"
import About from "./component/About/About"
import Project from "./component/Project/Project"
import { Route,Routes } from 'react-router-dom'
import Navbar from './component/Navbar/Navbar'

function App() {
  return (
    <> 
    <Navbar/>
   <Routes>
    <Route path='/about' element={<About/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/project' element={<Project/>}/>
   </Routes>
    </>
  )
}

export default App