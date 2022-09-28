import React from 'react'
import { siFirebase, siNodedotjs, siHtml5, siExpress, siGit, siGithub, siJavascript,siMongodb,siReact,siRubyonrails,siPython,siPhp,siAndroidstudio, siNpm, siOracle, siMysql } from 'simple-icons/icons';
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
 
const Techstack = () => {

  //Array of icons from SimepleIcons to use in the Tag Cloud
  const array = [
                  siFirebase, siNodedotjs, siHtml5, 
                  siExpress, siGit, siGithub, 
                  siJavascript, siMongodb, siReact, 
                  siRubyonrails, siPython, siPhp, 
                  siAndroidstudio, siNpm, siOracle, 
                  siMysql
                ]
  
  //Arrow function to map through the SimpleIcons array and create the Tag Cloud using the installed library
  const icons = array.map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 100,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    })
  })

  return (
    <div id="tech stack" className='md:h-auto w-full flex flex-col items-center p-6 pb-[50px]'>
      <h1 className='md:text-6xl text-text text-4xl uppercase font-bold underline decoration-accent mt-5 decoration-4 underline-offset-8' data-aos="fade-up">Web Technology</h1>
      <div className='md:flex-row md:text-left text-center flex flex-col justify-around items-center w-full mt-6' data-aos="fade-up">
        <div className='md:w-[500px] w-[300px]'>
          <h1 className='text-accent primary-text text-4xl font-bold uppercase'>Learning</h1>
          <p className='text-text secondary-text mt-3'>
            For over the last few years I've learned a vast amount of web technologies that have garnered me a significant amount of experience. Working on co-op projects, building assignments
            during my time in school and creating side projects I've learnt a lot of amazing things.
          </p>
          <p className='text-text secondary-text mt-3'>
            With my willingness to learn and adapt to new technologies, I hope to get my skill set to higher levels and increase this cloud of technology.
          </p>
        </div>
        <Cloud options={{"wheelZoom": false, "minSpeed": 0.01, "maxSpeed":0.05, "imageScale": 1.2, "outlineMethod": 'none'}}>
          {icons}
        </Cloud>
      </div>
    </div>
  )
}

export default Techstack
