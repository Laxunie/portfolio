import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center items-center primary-text text-text h-[10%] pb-6'>
      <div className='flex flex-col items-center justify-center gap-2 text-center mb-[60px]'>
        <p className='text-xl'>Made with <img className='w-[35px] inline-block' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" alt="react"/> by Ricky La</p>
        <p>Inspiration from
          <a href="https://rmagatx.github.io/portfolio/" target="_blank" rel="noreferrer" className='text-accent links-anim links-anim-colour2'> Remelson Magat</a>
          ,
          <a href="https://www.jarrodservilla.com/" target="_blank" rel="noreferrer" className='text-accent links-anim links-anim-colour2'> Jarrod Servilla </a>
          and,
          <a href="https://jacekjeznach.com/" target="_blank" rel="noreferrer" className='text-accent links-anim links-anim-colour2'> Jacek Jeznach</a>
        </p>
      </div>
    </div>
  )
}

export default Footer