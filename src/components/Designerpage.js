import React from 'react'
import "./Designer.css"
import Header from './Header'
import Sidebar from './Sidebar'
import ProjectCard from './ProjectCard'
import Footer from './Footer'
import SubmittedDesigns from './SubmittedDesigns'

const Designerpage = () => {
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

export default Designerpage