import React from 'react'
import { useEffect } from 'react';
import AOS from 'aos';
import back from '../assets/images/dsBuffer.bmp-removebg-preview.png'

const Header = () => {
  useEffect(() => {
    AOS.init();
  })
  useEffect(() => {
    document.addEventListener("mousemove", parallax);

    function parallax(e){
      document.querySelectorAll(".object").forEach(function(move) {
        var moving_value = move.getAttribute("data-value");
        var x = e.clientX * moving_value/75;
        var y = e.clientY * moving_value/75;
        move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
      })  
    }
  })
  
  return (
    <header id="about" className='relative bg-accent flex justify-center items-center overflow-hidden'>
      <svg height="100" width="400" className='lg:block z-[1] hidden absolute top-[100px] left-[35px] object opacity-[0.7]' data-value="-2" data-aos="fade-in" data-aos-duration="5000" data-aos-easing="linear">
        <circle width="59px" cx="50" cy="50" r="40" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='lg:block z-[1] hidden absolute bottom-[30px] right-[25px] object opacity-[0.7]' data-value="4" data-aos="fade-in" data-aos-duration="10000" data-aos-easing="linear">
        <circle className="" cx="50" cy="50" r="40" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='lg:block z-[1]  hidden absolute top-[300px] right-[-20px] object opacity-[0.7]' data-value="9" data-aos="fade-in" data-aos-duration="15000" data-aos-easing="linear">
        <circle className="" cx="50" cy="50" r="40" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='lg:block z-[1] hidden absolute bottom-[50px] left-[12px] object opacity-[0.7]' data-value="-3" data-aos="fade-in" data-aos-duration="20000" data-aos-easing="linear">
        <circle className="" cx="50" cy="50" r="40" fill="#85C5CC" />
      </svg>
      <svg height="100" width="100" className='lg:block z-[1] hidden absolute bottom-[100px] right-[123px] object opacity-[0.7]' data-value="6" data-aos="fade-in" data-aos-duration="25000" data-aos-easing="linear">
        <circle className="" cx="50" cy="50" r="40" fill="#85C5CC" />
      </svg>
      <div className='lg:block z-[1] hidden absolute top-[150px] left-[700px] w-[234px] h-[234px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="9" data-aos="fade-in" data-aos-duration="30000" data-aos-easing="linear"></div>
      <div className='lg:block z-[1] hidden absolute top-[150px] right-[70px] w-[150px] h-[150px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="2" data-aos="fade-in" data-aos-duration="35000" data-aos-easing="linear"></div>
      <div className='lg:block z-[1] hidden absolute bottom-[100px] right-[123px] w-[500px] h-[500px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="-6" data-aos="fade-in" data-aos-duration="40000" data-aos-easing="linear"/>
      <div className='lg:block z-[1] hidden absolute bottom-[100px] left-[123px] w-[200px] h-[200px] bg-[#85C5CC] object opacity-[0.7] border-2 rounded-[50%] border-[#85C5CC]' data-value="9" data-aos="fade-in" data-aos-duration="45000" data-aos-easing="linear"></div>
      <div className='xl:w-[1200px] md:w-[600px] flex w-[1000px] h-screen items-center mx-auto pt-[96px] px-6 z-[1]'>
        <div className='xl:w-[700px]'>
          <h1 className='md:text-7xl text-primary primary-text text-5xl font-bold uppercase'>Ricky La</h1>
          <p className='md:text-xl text-text secondary-text text-3xl pt-10 italic'>Aspiring Software Engineer</p>
          <p className='md:text-xl font-thin text-text secondary-text pt-5'>I'm an alumni from <a href="https://www.rrc.ca/" 
          className='primary-text text-primary font-bold links-anim h-[25px] inline-block links-anim-colour1'>
          Red River College</a> graduated from the{" "}
          <a href="https://catalogue.rrc.ca/Programs/WPG/Fulltime/BUSGF-DP" className='primary-text text-primary font-bold links-anim h-[25px] links-anim-colour1'>
          Business Information Technology (BIT) </a> program. I enjoy building software 
          applications and the problem solving that comes with it. Currently I am focused on building projects to strengthen my portfolio.</p>
          <div className='flex items-center secondary-text mt-10 z-[1]'>
            <a href="#_" class="rounded-md px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-primary text-indigo-600 text-white">
              <span class="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-primary top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span class="relative text-primary transition duration-300 group-hover:text-white ease">Contact Me</span>
            </a>
          </div>
        </div>
      </div>
      <div className='jump absolute right-[40px] bottom-[20px] text-text secondary-text z-[1]'>
        <p>Scroll Down</p>
      </div>
    </header>
  )
}

export default Header