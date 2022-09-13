import React from 'react'
import { useEffect } from 'react';

const Header = () => {
  return (
    <header className='w-full h-[940px] flex justify-center items-center bg-accent'>
      <div className='w-[1150px] flex flex-col'>
        <h1 className='text-primary text-[100px] font-bold primary-text tracking-wide'>Ricky La</h1>
        <p className='secondary-text text-[60px] text-text'>Aspiring Software Engineer</p>
        <p className='w-[650px] text-text secondary-text text-2xl'>I'm an alumni from <a href="https://www.rrc.ca/" 
        className='text-primary font-bold links-anim h-[25px] inline-block links-anim-colour1'>
        Red River College</a> graduated from the <br/>  
        <a href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP" className='text-primary font-bold links-anim inline-block h-[25px] links-anim-colour1'>
        Business Information Technology (BIT)</a> program. I enjoy building software 
        applications and the problem solving that comes with it. Currently I am focused on building projects to strengthen my portfolio.</p>
        <button className='secondary-text text-3xl border-2 p-2 text-text w-[190px]'>Contact me</button>
      </div>
    </header>
  )
}

export default Header