import React from 'react'
import { useEffect } from 'react';

const Header = () => {
  return (
    <header className='bg-accent'>
      <div className='flex flex-col min-w-[400px] h-screen justify-center mx-auto py-[100px] flex-wrap'>
        <h1 className='text-primary text-4xl font-bold primary-text tracking-wide py-3'>Ricky La</h1>
        <p className='secondary-text font-bold text-xl text-text py-3'>Aspiring Software Engineer</p>
        <p className='max-w-[650px] text-text secondary-text break-words text-2xl pt-3'>I'm an alumni from <a href="https://www.rrc.ca/" 
        className='text-primary font-bold links-anim h-[25px] inline-block links-anim-colour1'>
        Red River College</a> graduated from the <br/>  
        <a href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP" className='text-primary font-bold links-anim inline-block h-[25px] links-anim-colour1'>
        Business Information Technology (BIT)</a> program. I enjoy building software 
        applications and the problem solving that comes with it. Currently I am focused on building projects to strengthen my portfolio.</p>
        <div>
          <button className='flex border-2 items-center secondary-text p-4 mt-10'><a href="something" className='text-sm text-text'>Contact Me</a></button>
        </div>
      </div>
    </header>
  )
}

export default Header