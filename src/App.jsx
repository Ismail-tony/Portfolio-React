import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/home.jsx'
    import About  from './components/about.jsx'
import  Contact  from './components/contact.jsx'
import  Project  from './components/project.jsx'
import  Header  from './components/header.jsx'

const App = () => {
  return (
    <Router>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
    </Routes>
</Router>
  )
}

export default App;