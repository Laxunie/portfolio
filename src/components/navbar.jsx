import React, { useEffect } from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-around fixed backdrop-blur w-full p-6 bg-primary shadow-lg'>
      <h1 className='text-3xl font-bold text-accent border-2 hover:bg-text duration-200 p-1 cursor-pointer'>RL</h1>
      <ul className='flex gap-6 items-center text-text text-2xl secondary-text'>
        <li id="link" className='links-anim links-anim-colour2'>About</li>
        <li id="link" className='links-anim links-anim-colour2'>Tech Stack</li>
        <li id="link" className='links-anim links-anim-colour2'>Projects</li>
        <li id="link" className='links-anim links-anim-colour2'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar