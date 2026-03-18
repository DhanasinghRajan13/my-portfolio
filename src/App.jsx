import React from 'react'
import Navbar from './components/navbar';
import Hero from './components/hero';
import Description from './components/description';
import Skills from './components/skills';
import Project from './components/project';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {

  return (
    <div>
      <Navbar/>
      <Hero />
      <Description/>
      <Skills/>
      <Project />
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App;