import React, {useState} from 'react'

import { Sling as Hamburger } from 'hamburger-react'
import {Link} from 'react-scroll'

const Navbar = () => {

  //State for Hamburger-React open and close function
  const [isOpen, setOpen] = useState(false)

  //Array of navbar links with their React-Scroll offsets
  const links = [
    {
      link: "About",
      desktopOffset: 0,
      mobileOffset: 0,
      id: 1
    },
    {
      link: "Tech Stack",
      desktopOffset: -80,
      mobileOffset: 0,
      id: 2
    },
    {
      link: "Projects",
      desktopOffset: -80,
      mobileOffset: 0,
      id: 3
    },
    {
      link: "Contact",
      desktopOffset: 0,
      mobileOffset: 0,
      id: 4
    },
  ];
  
  //When hamburger is clicked expand/close the hidden nav menu, change IDs so scrolling behaviour is changed and determine whether to close or open the menu
  const hamburgerClick = () => {
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

  //When a menu item is clicked in the mobile navbar click the Hamburger-React icon so the animation goes through
  const handleMenuOnClick = () => {
    if (isOpen) {
      document.getElementsByClassName("hamburger-react")[0].click();
    }
  }

  //Map through the Links array to display <li> elements and set React-Scroll properties of the Links
  const menuLinks = (offset, clickFunction) => {
    return(
      links.map(link => {
        return(
          <li key={link.id} id="link" className='links-anim links-anim-colour1 text-text'>
            <Link 
              to={link.link.toLowerCase()} 
              spy={true} 
              smooth={true} 
              offset={link[offset]} 
              duration={500}
              onClick={() => 
                {
                  if(clickFunction){
                    clickFunction()
                  }
                }
              }
            >
              {link.link}
            </Link>
          </li>
        )
      })
    )
  }
 
  return (
    <nav id="navbar" className='navbar sm:justify-around flex items-center justify-between fixed backdrop-blur w-full p-6 bg-accent z-[2] duration-1000'>
      <h1 id="logo" className='text-3xl font-bold text-primary border-2 hover:bg-text duration-200 p-1 cursor-pointer z-[1]' data-aos="fade-down" data-aos-once="true" data-aos-delay="1500">
        RL
      </h1>
      <div className='sm:flex hidden' data-aos="fade-down" data-aos-once="true" data-aos-delay="1500">
        <ul className='flex gap-6 items-center text-text text-l secondary-text'>
          {menuLinks("desktopOffset")}
        </ul>
      </div>
      <div className='sm:hidden'>
        <div data-aos="fade-down" data-aos-once="true" data-aos-delay="500">
          <Hamburger onToggle={hamburgerClick} direction="left" color='#7FB6AC'/>
        </div>
        <div id='hamburger' className='fixed right-0 top-0 bg-primary w-[0px] h-screen duration-200 z-[-1]'>
            <ul className='flex flex-col justify-center uppercase text-lg text-center h-screen gap-5'>
              {menuLinks("mobileOffset", handleMenuOnClick)}
            </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar