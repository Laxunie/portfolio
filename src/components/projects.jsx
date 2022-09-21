import React from 'react'
import {ProjectContainer} from '../components'
import {images} from '../assets'

const Projects = () => {

  return (
    <div id="projects" className='flex flex-col w-full items-center bg-accent p-6 overflow-hidden'>
      <h1 className='md:text-6xl text-text text-4xl uppercase font-bold underline decoration-primary mt-5'>Projects</h1>
      <div className='m-6'>
        <ProjectContainer 
          title="Windows File Remover"
          text="A very simple Windows Forms application that uses queues to store selected files and delete them in the given order."
          image={images.fileRemover}
          position1="2"
          position2="1"
          languages={['C#']}
          aos="fade-right"
          id="1"
        />

        <ProjectContainer 
          title="Portfolio Building"
          text="Things that I enjoy building are portfolio websites for people that I know. I feel that building these websites is a great opportunity as the client 
          gets a website and I gain a large amount of experience from building them."
          image={images.acPortfolio}
          position1="1"
          position2="2"
          languages={['React', 'Firebase']}
          aos="fade-left"
          id="2"
        />

        <ProjectContainer 
          title="Windows File Remover"
          text="A very simple Windows Forms application that uses queues to store selected files and delete them in the given order."
          image={images.fileRemover}
          position1="2"
          position2="1"
          languages={['C#']}
          aos="fade-right"
          id="3"
        />
      </div>
    </div>
  )
}

export default Projects