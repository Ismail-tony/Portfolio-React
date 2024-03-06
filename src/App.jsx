import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import About  from './components/about.jsx'
import  Contact  from './components/contact.jsx'
import  Project  from './components/project.jsx'
import  Header  from './components/header.jsx'
import './App.css'

const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
</Router>
  )
}

export default App;