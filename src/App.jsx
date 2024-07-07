import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import Carousel from './components/Carousel'
import { Modal } from './components/Modal'
import { Overview } from './components/Overview'
import { Packages } from './components/Packages'
import { Accordion } from './components/Accordion'
import { Footer } from './components/Footer'

function App() {
  

  return (
    <>
    <Navbar/>
    <Modal/>
    <Carousel/>
    <Overview/>
    <Packages/>
    <Accordion/>
    <Footer/>
   </>
  )
}

export default App
