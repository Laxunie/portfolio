import React from 'react'

const Contact = () => {
    return (
    <div id="contact" className='w-full h-[90%] flex  flex-col justify-center items-center'>
        <div className='md:w-[600px] w-[350px] text-center' data-aos="fade-up" data-aos-duration="2000">
            <h1 className='md:text-6xl text-text text-4xl uppercase font-bold underline decoration-accent decoration-4 underline-offset-8'>Contact Me</h1>
            <p className='text-text mt-5 secondary-text '>Whether it's a job opportunity, feedback on my work, or a call for collaboration my inbox is always open! Feel free to send me a message! </p>
            <a href="mailto:rickylaa@hotmail.com" class="relative mt-5 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-accent transition duration-300 ease-out border-2 border-accent rounded shadow-md group">
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-accent group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span class="absolute flex items-center justify-center w-full h-full text-accent transition-all duration-300 transform group-hover:translate-x-full ease">Send Email</span>
                <span class="relative invisible">Send Email</span>
            </a>
        </div>
    </div>
  )
}

export default Contact