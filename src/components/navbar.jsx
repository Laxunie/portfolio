import React, {useEffect, useState} from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import AOS from 'aos';
import { Sling as Hamburger } from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)

  useEffect(() => {
    AOS.init();
  },[])

  function hamburgerClick(){
    if(isOpen){
      document.getElementById('hamburger').style.width = "0"
    }
    else{
      document.getElementById('hamburger').style.width = "100%"
    }
  }

  return (
    <nav className='sm:justify-around flex items-center display-none justify-between  fixed backdrop-blur w-full p-6 bg-primary shadow-lg'>
      <h1 className='text-3xl font-bold text-accent border-2 hover:bg-text duration-200 p-1 cursor-pointer z-[-1]'>RL</h1>
      <div className='sm:flex hidden'>
        <ul className='flex gap-6 items-center text-text text-2xl secondary-text'>
          <li id="link" className='links-anim links-anim-colour2'>About</li>
          <li id="link" className='links-anim links-anim-colour2'>Tech Stack</li>
          <li id="link" className='links-anim links-anim-colour2'>Projects</li>
          <li id="link" className='links-anim links-anim-colour2'>Contact</li>
        </ul>
      </div>
      <div className='sm:hidden flex'>
        <Hamburger onToggle={(e) => hamburgerClick()} toggled={isOpen} toggle={setOpen} direction="left" color='#7FB6AC'/>
        <div id='hamburger' className='fixed right-0 top-0 bg-primary w-[0px] h-screen z-[-1] duration-200'>
            <ul className='flex flex-col justify-center uppercase text-lg text-center h-screen gap-5'>
              <li id="media-text" className='text-3xl text-text secondary-text'>About</li>
              <li id="media-text" className='text-3xl text-text secondary-text'>Tech Stack</li>
              <li id="media-text" className='text-3xl text-text secondary-text'>Projects</li>
              <li id="media-text" className='text-3xl text-text secondary-text'>Contact</li>
            </ul>
        </div>
      </div>
      
      
    </nav>
  )
}

export default Navbar