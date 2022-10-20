import React from 'react'
import { siFirebase, siNodedotjs, siHtml5, siExpress, siGit, siGithub, siJavascript,siMongodb,siReact,siRubyonrails,siPython,siPhp,siAndroidstudio, siNpm, siOracle, siMysql, siCss3, siTailwindcss } from 'simple-icons/icons';
import { Firebase, Nodedotjs, Html5, Express, Git, Javascript, Mongodb, ReactJs, Rubyonrails, Python, Php, Androidstudio, Npm, Oracle, Mysql, CssThree, Github, Tailwindcss } from '@icons-pack/react-simple-icons'
import { Cloud, renderSimpleIcon } from "react-icon-cloud";
import {AiOutlineUnorderedList, AiFillCloud} from 'react-icons/ai'
import { useState } from 'react';
 
const Techstack = () => {

  const [cloudView, setCloudView] = useState(0);

  const techNamesArray = [
    {
      "name": "Firebase",
      "icon": <Firebase size={80} color="orange"/>
    },
    {
      "name": "NodeJS",
      "icon": <Nodedotjs size={80} color="green"/>
    }, 
    {
      "name": "HTML5",
      "icon": <Html5 size={80} color="#C9502E"/>
    },
   
    {
      "name": "CSS3",
      "icon": <CssThree size={80} color="#1572B6"/>
    }, 
   
    {
      "name": "Git",
      "icon": <Git size={80} color="#C9502E"/>
    }, 
   
    {
      "name": "GitHub",
      "icon": <Github size={80} color="black"/>
    },
    
    {
      "name": "JavaScript",
      "icon": <Javascript size={80} color="yellow"/>
    }, 
    
    {
      "name": "MongoDB",
      "icon": <Mongodb size={80} color="green"/>
    }, 
    
    {
      "name": "React",
      "icon": <ReactJs size={80} color="#60D8F8"/>
    },
    
    {
      "name": "Ruby On Rails",
      "icon": <Rubyonrails size={80} color="red"/>
    }, 
    
    {
      "name": "Python",
      "icon": <Python size={80} color="#45789E"/>
    }, 
    
    {
      "name": "PHP",
      "icon": <Php size={80} color="#7479B0"/>
    },
    
    {
      "name": "Android Studio",
      "icon": <Androidstudio size={80} color="#3ECF7F"/>
    }, 
    
    {
      "name": "NPM",
      "icon": <Npm size={80} color="red"/>
    }, 
    
    {
      "name": "Oracle SQL",
      "icon": <Oracle size={80} color="red"/>
    },
    
    {
      "name": "MySQL",
      "icon": <Mysql size={80} color="#45789E"/>
    }, 
    {
      "name": "ExpressJS",
      "icon": <Express size={80} color="black"/>
    }, 
    {
      "name": "TailWindCSS",
      "icon": <Tailwindcss size={80} color="#07B5D2"/>
    }
  ]

  const iconsList = techNamesArray.map(item => {
    return(
      <span key={item.name} className="flex flex-col items-center gap-1">
        {item.icon}
        <h1 className='text-xl'>{item.name}</h1>
      </span>
    )
  })

  //Array of icons from SimepleIcons to use in the Tag Cloud
  const cloudArray = [
                  siFirebase, siNodedotjs, siHtml5, 
                  siExpress, siGit, siGithub, 
                  siJavascript, siMongodb, siReact, 
                  siRubyonrails, siPython, siPhp, 
                  siAndroidstudio, siNpm, siOracle, 
                  siMysql, siCss3, siTailwindcss
                ]
  
  //Arrow function to map through the SimpleIcons array and create the Tag Cloud using the installed library
  const icons = cloudArray.map((icon) => {
    return renderSimpleIcon({
      icon,
      size: 100,
      aProps: {
        onClick: (e) => e.preventDefault()
      }
    })
  })

  return (
    <div id="tech stack" className='md:h-auto relative w-full flex flex-col items-center p-6 pb-[50px]'>
      <div className='absolute top-[80px] right-[200px] flex gap-3'>
        <button
          style={!cloudView ? {"backgroundColor": "gray"} : {}}
          onClick={(e) => setCloudView(0)}
          className="bg-gray-200 rounded p-2 hover:bg-gray-300 duration-200">
          <AiFillCloud size={25}/>
        </button>
        <button 
          style={cloudView ? {"backgroundColor": "gray"} : {}}
          onClick={(e) => setCloudView(1)}
          className="bg-gray-200 rounded p-2 hover:bg-gray-300 duration-200">
          <AiOutlineUnorderedList size={25}/>
        </button>
      </div>
      
      <h1 className='md:text-6xl text-text text-4xl uppercase font-bold underline decoration-accent mt-5 decoration-4 underline-offset-8' data-aos="fade-up">Web Technology</h1>
      <div className='md:flex-row md:text-left text-center flex flex-col justify-around items-center w-full mt-6' data-aos="fade-up">
        <div className='md:w-[500px] w-[300px]'>
          <h1 className='text-accent primary-text text-4xl font-bold uppercase'>Learning</h1>
          <p className='text-text secondary-text mt-3'>
            For over the last few years I've learned a vast amount of web technologies that have garnered me a significant amount of experience. Working on co-op projects, working on assignments
            during my time in school and developing side projects, I've learnt a lot of amazing web development tricks and practices.
          </p>
          <p className='text-text secondary-text mt-3'>
            With my willingness to learn and adapt to new technologies, I hope to get my skill set to higher levels and increase this cloud of technology.
          </p>
        </div>
        {!cloudView ? 
          <Cloud 
            options={
              {
                "wheelZoom": false, 
                "minSpeed": 0.008, 
                "maxSpeed":0.04, 
                "imageScale": 1.2, 
                "outlineMethod": 'none', 
                "noSelect": true,
                "initial": [0.01,-0.05]
                }
              }>
            {icons}
          </Cloud>
        :
          <div className='grid grid-cols-5 p-10 gap-3' data-aos="fade-in" data-aos-duration="2000">
            {iconsList}
          </div>
        }
      </div>
    </div>
  )
}

export default Techstack
