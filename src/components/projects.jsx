import React from 'react'
import {ProjectContainer} from '../components'
import {images} from '../assets'

const Projects = () => {

  return (
    <div id="projects" className='flex flex-col w-full items-center bg-accent p-6 overflow-hidden'>
      <h1 className='md:text-6xl text-text text-4xl uppercase font-bold underline decoration-primary mt-5 decoration-4 underline-offset-8'>Projects</h1>
      <div className='m-6'>
        <ProjectContainer 
          title="Notes4U"
          text="A bulletin board website for sticky notes, created for users to store notes in an easily accessible website. Login is email confirmation and requires
            no passwords!"
          image={images.Notes4U}
          position1="2"
          position2="1"
          languages={['React', 'Firebase', 'Material UI', 'TailWindCSS']}
          aos="fade-right"
          id="3"
          link="https://github.com/Laxunie/Notes4U"
          website="https://notes4u.onrender.com"
        />

        <ProjectContainer 
          title="Nutrion Facts API"
          text="This website uses the CalorieNinja API found on RapidAPI. This API has the nutrition facts of thousands of foods and drinks, go to the 
            website search for any food/beverage and it will give you its nutrition facts."
          image={images.nutritionFacts}
          position1="1"
          position2="2"
          languages={['React', 'TailWindCSS', 'Axios']}
          aos="fade-left"
          id="2"
          link="https://github.com/Laxunie/anita-chandara-portfolio"
          website="https://nutritionfactsapi.onrender.com/"
        />

        <ProjectContainer 
          title="Windows File Remover"
          text="A very simple Windows Forms application that uses queues to store selected files and delete them in the given order."
          image={images.fileRemover}
          position1="2"
          position2="1"
          languages={['C#']}
          aos="fade-right"
          id="1"
          link="https://github.com/Laxunie/FileRemover"
          website=""
        />
      </div>
    </div>
  )
}

export default Projects