import React, { useEffect, useState } from 'react'

const Modal = ({close}) => {

    const [load, setLoad] = useState(false);

    if(load){
        document.getElementById("outside-modal").addEventListener("click", function(){
            document.body.style.overflow = "auto";
            close(false);
        })

        document.getElementById("inside-modal").addEventListener("click", function(e){
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        })
    }


    useEffect(() => {
        setLoad(true);
    },[])

  return (
    <div id="outside-modal" className='fixed top-0 left-0 w-full h-full bg-white/20 flex justify-center items-center z-10' data-aos="fade-in">
        <div id="inside-modal" className='w-[500px] h-[500px] rounded-xl bg-primary p-10'>
            <h1>hey</h1>
        </div>
    </div>
  )
}

export default Modal