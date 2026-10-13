import React from 'react'
import { Routes,Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Service from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
import NotFound from './Pages/NotFound/NotFound'
import Hero from './components/Hero/Hero'
import Whatsapp from './components/Whatsapp/Whatsapp'

const App = () => {
  return (
    <>
    <Navbar/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Service' element={<Service />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer/>
      <Whatsapp/>
    </>
  )
}

export default App
