import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from './components/home.jsx'
import { About } from './components/about.jsx'
import { Contact } from './components/contact.jsx'
import { Project } from './components/project.jsx'
import { Header } from './components/header.jsx'

const Routes = () => {
  return (
    <Router>
        <Header />
        <Switch>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/project' element={<Project />} />
        </Switch>
    </Router>
  )
}

export default Routes;