import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Project from './pages/Project'
import About from './pages/About'
import Navbar from './components/Navbar'
import MantineProviderWrapper from './MantineProviderWrapper'

function App() {
  return (
    <MantineProviderWrapper>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>

          <Route path="/projects" element={<Project/>}/>

          <Route path="/blog" element={<Blog/>}/>

          <Route path="/contacts" element={<Contact/>}/>

        

          
        </Routes>
      </Router>

    </MantineProviderWrapper>
  )
}

export default App