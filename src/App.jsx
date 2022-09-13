import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

import './index.css'


const App = () => {
  return (
    <>
        <p>Heisann</p>
        <Header />
        <Navbar />
        <About />
        <Projects />
        <Footer />
        <p>Hade</p>
    </>
  )
}

export default App