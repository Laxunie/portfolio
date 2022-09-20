import React from 'react'
import {ProjectContainer} from '../components'
import fileRemover from '../assets/images/fileRemover.png'

const Projects = () => {

  return (
    <div className='flex flex-col w-full items-center bg-accent p-6 overflow-hidden'>
      <h1 className='text-text text-4xl uppercase font-bold underline decoration-primary'>Projects</h1>
      <div className='m-6'>
        <ProjectContainer 
          title="Windows File Remover"
          text="A very simple Windows Forms application that uses queues to store selected files and delete them in the given order."
          image={fileRemover}
          position1="2"
          position2="1"
          languages={['C#']}
          aos="fade-right"
        />

        <ProjectContainer 
          title="Windows File Remover"
          text="A very simple Windows Forms application that uses queues to store selected files and delete them in the given order."
          image={fileRemover}
          position1="1"
          position2="2"
          languages={['C#']}
          aos="fade-left"
        />

        <ProjectContainer 
          title="Windows File Remover"
          text="A very simple Windows Forms application that uses queues to store selected files and delete them in the given order."
          image={fileRemover}
          position1="2"
          position2="1"
          languages={['C#']}
          aos="fade-right"
        />
      </div>
    </div>
  )
}

export default Projects