import React from 'react'
import "./App.css"
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import ProjectCard from './components/ProjectCard'
import SubmittedDesigns from './components/SubmittedDesigns'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
    <Header />
    <div className='main'>
      <Sidebar />
      <ProjectCard />
      <SubmittedDesigns />
    </div>
    <Footer />
    </div>
  )
}

export default App