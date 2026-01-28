import React from 'react'
import Profile from './components/Profile'
import State from './hooks/State'
import Parent from './components/Parent'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  return (<>
<Navbar/>
<Routes>
  <Route path='/' Component={Home}/>
  <Route path='/about' Component={About}/>
  <Route path='/services' Component={Services}/>
  <Route path='/contact' Component={Contact}/>
</Routes>
    </>
  )
}

export default App