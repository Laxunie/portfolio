import React, {useEffect, useState} from 'react'
import AOS from 'aos';
import { Sling as Hamburger } from 'hamburger-react'
import {Link} from 'react-scroll'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  const links = [
    {
      link: "About",
      offset: 0,
      mobileOffset: 0,
    },
    {
      link: "Tech Stack",
      offset: -80,
      mobileOffset: 0,
    },
    {
      link: "Projects",
      offset: -80,
      mobileOffset: 0,
    },
    {
      link: "Contact",
      offset: 0,
      mobileOffset: 0,
    },
  ];

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  })

  useEffect(() => {
    var lastScrollTop = 0;
    window.addEventListener("scroll", function(){
      const navbar = document.getElementById("navbar");
      const scrollTop = window.pageYOffset;
      if(navbar){
        if(scrollTop <= 0){
          navbar.classList.remove("shadow-lg")
        }

        if(scrollTop > lastScrollTop && !navbar.classList.contains("scroll-down")){
            navbar.classList.add("scroll-down")
        }

        if(scrollTop < lastScrollTop && navbar.classList.contains("scroll-down")){
          navbar.classList.remove("scroll-down")
          navbar.classList.add("shadow-lg")
        }

        lastScrollTop = scrollTop;
      }
    })
  })
  
  function hamburgerClick(){
    if(isOpen){
      setOpen(false);
      document.getElementById("hamburgerView").id = "navbar"
      document.getElementById('hamburger').style.width = "0"
    }
    else{
      setOpen(true);
      document.getElementById("navbar").id = "hamburgerView"
      document.getElementById('hamburger').style.width = "100%"
    }
  }
 
  return (
    <nav id="navbar" className='navbar sm:justify-around flex items-center justify-between fixed backdrop-blur w-full p-6 bg-primary z-[2] duration-1000'>
      <h1 className='text-3xl font-bold text-accent border-2 hover:bg-text duration-200 p-1 cursor-pointer z-[1]'>RL</h1>
      <div className='sm:flex hidden'>
        <ul className='flex gap-6 items-center text-text text-l secondary-text'>
          {links.map(link => {
            var lower = link.link.toLowerCase();
            return(
              <li key={link} id="link" className='links-anim links-anim-colour2'>
                <Link to={lower} spy={true} smooth={true} offset={links.offset} duration={500}>
                  {link.link}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='sm:hidden flex'>
        <Hamburger onToggle={() => hamburgerClick()} direction="left" color='#7FB6AC'/>
        <div id='hamburger' className='fixed right-0 top-0 bg-primary w-[0px] h-screen z-[-1] duration-200'>
            <ul className='flex flex-col justify-center uppercase text-lg text-center h-screen gap-5'>
              {links.map(link => {
                var lower = link.link.toLowerCase();
                lower.replace(/\s/g, '');
                return(
                  <li key={link} id="media-text" className='text-3xl text-text secondary-text'>
                    <Link to={lower} spy={true} smooth={true} offset={link.mobileOffset} duration={500} onClick={() => {
                      setOpen(false);
                      document.getElementById("hamburgerView").id = "navbar"
                      document.getElementById('hamburger').style.width = "0"
                    }}>
                      {link.link}
                    </Link>
                  </li>
                )
              })}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar