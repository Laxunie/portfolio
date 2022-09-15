import React from 'react'
import {images} from '../assets'
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    document.addEventListener("mousemove", parallax);

    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value/100;
        var y = e.clientY * moving_value/100;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
        console.log(move.getAttribute("transform-value"))
      })  
    }
  })
  
  return (
    <header className='relative bg-accent flex justify-center items-center overflow-hidden'>
      <svg height="100" width="400" className='xl:block hidden absolute top-[100px] left-[35px] object opacity-[0.7]' data-value="-2" transform-value={Math.random()}>
        <circle width="59px" cx="50" cy="50" r="40" stroke-width="3" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='md:block hidden absolute bottom-[30px] right-[25px] object opacity-[0.7]' data-value="4" transform-value={Math.random()}>
        <circle className="" cx="50" cy="50" r="40" stroke-width="3" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='md:block  hidden absolute top-[300px] right-[-20px] object opacity-[0.7]' data-value="-6" transform-value={Math.random()}>
        <circle className="" cx="50" cy="50" r="40" stroke-width="3" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='md:block hidden absolute bottom-[50px] left-[12px] object opacity-[0.7]' data-value="-6" transform-value={Math.random()}>
        <circle className="" cx="50" cy="50" r="40" stroke-width="3" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='md:block hidden absolute bottom-[100px] right-[123px] object opacity-[0.7]' data-value="-6" transform-value={Math.random()}>
        <circle className="" cx="50" cy="50" r="40" stroke-width="3" fill="#85C5CC" />
      </svg>
      <div className='md:block hidden absolute top-[150px] left-[700px] w-[234px] h-[234px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="9"></div>
      <div className='md:block hidden absolute top-[150px] right-[70px] w-[150px] h-[150px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="2"></div>
      <div className='md:block hidden absolute bottom-[100px] right-[123px] w-[500px] h-[500px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="-6"/>
      <div className='md:block hidden absolute bottom-[100px] left-[123px] w-[200px] h-[200px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="9"></div>
      <div className='xl:w-[1200px] md:w-[600px] flex w-[1000px] h-screen items-center mx-auto pt-[96px] px-6 z-[1]'>
        <div className='xl:w-[700px]'>
          <h1 className='md:text-8xl text-primary primary-text text-5xl'>Ricky La</h1>
          <p className='md:text-5xl text-text secondary-text text-3xl pt-10'>Aspiring Software Engineer</p>
          <p className='md:text-3xl text-text secondary-text pt-3'>I'm an alumni from <a href="https://www.rrc.ca/" 
          className='primary-text text-primary font-bold links-anim h-[25px] inline-block links-anim-colour1'>
          Red River College</a> graduated from the{" "}
          <a href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP" className='primary-text text-primary font-bold links-anim h-[25px] links-anim-colour1'>
          Business Information Technology (BIT) </a> program. I enjoy building software 
          applications and the problem solving that comes with it. Currently I am focused on building projects to strengthen my portfolio.</p>
          <div className='flex items-center secondary-text mt-5'>
            <button className='md:p-6 p-4 bg-primary'><a href="something" className='md:text-2xl text-sm text-text'>Contact Me</a></button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header