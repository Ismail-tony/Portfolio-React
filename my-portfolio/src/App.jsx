import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './components/home.jsx'
import { About } from './components/about.jsx'
import { Contact } from './components/contact.jsx'
import { Project } from './components/project.jsx'

const App = () => {
  return (
    <browserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </browserRouter>
    
  )
}

export default App;