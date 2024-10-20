import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import gsap from "gsap"

const NewNavbar = () => {
  const [toggle,setToggle] = useState(false)
  const handleClick=()=>{
    setToggle(toggle===false?true:false)
    console.log("clicked")
  }
  useEffect(()=>{
    if (toggle) {
      gsap.from(".main", {
          x: -50,
          duration: 0.5,
      });
      gsap.to('.screen', {
          backgroundColor: "black",
          duration: 1,
      });
      gsap.from('.second-half',{
        y:50,
        duration:0.5
      })
  }
  },[toggle])
  return (
    <>
    <div className='w-full h-24 bg-transparent pt-4 pb-4 flex md:justify-evenly justify-around items-center z-40 top-0 sticky'>
        <div className='w-full h-full flex justify-between items-end'>
         <div className='text-4xl pl-16'>
            Y.
         </div>
         <div className='pr-20'>
        {!toggle && <i className="fa-solid fa-bars text-2xl cursor-pointer" onClick={handleClick}></i>}
        {toggle && <i className="fa-solid fa-xmark text-3xl cursor-pointer" onClick={handleClick}></i>}
         </div>
        </div>
    </div>
   {toggle && <div className='h-screen w-full sticky top-0 z-30 gradient-bg -mt-24 screen'>
    <div className='h-full w-full flex justify-center items-center'>
      <div className='h-full md:w-[46%] w-[100%] md:border-r border-gray-700'>
         <div className='h-full w-full flex md:pl-28 flex-col justify-center items-center'>
            <div className='h-56 md:w-[16vw]  flex flex-col justify-between md:items-start items-center main'>
            <NavLink className={(e)=>{return e.isActive?"text-orange-400 md:text-4xl text-3xl font-medium":`text-white md:text-4xl text-3xl font-medium`}} to="/" onClick={handleClick}>Homepage</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-orange-400 md:text-4xl text-3xl font-medium":`text-white md:text-4xl text-3xl font-medium`}} to="/services" onClick={handleClick}>Services</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-orange-400 md:text-4xl text-3xl font-medium":`text-white md:text-4xl text-3xl font-medium`}} to="/resume" onClick={handleClick}>Resume</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-orange-400 md:text-4xl text-3xl font-medium":`text-white md:text-4xl text-3xl font-medium`}} to="/contact" onClick={handleClick}>Contact Me</NavLink>
            </div>
         </div>
      </div>
      <div className='h-full w-[54%] text-white  justify-start items-end pb-20 pl-20 md:flex hidden second-half'>
         <div className='h-[68vh] w-4/5 flex flex-col'>
         <div className='h-[60%] w-full border-b border-gray-600 flex'>
         <div className='h-full w-1/2 flex flex-col font-medium text-xl'>
           <span className='mb-8'>Projects</span>
           <div className='flex flex-col font-medium text-base text-gray-500'>
           <span className='mb-4 hover:text-white cursor-pointer '>Quiz Quest</span>
           <span className='mb-4 hover:text-white cursor-pointer'>Personal Portfolio</span>
           <span className='mb-4 hover:text-white cursor-pointer'>YNotes</span>
           <span className='mb-4 hover:text-white cursor-pointer'>YNews</span>
           <span className='mb-4 hover:text-white cursor-pointer'>Khan Crane</span>
           <span className='mb-4 hover:text-white cursor-pointer'>Password Generator</span>
           </div>
         </div>
         <div className='h-full w-1/2 flex flex-col font-medium text-xl'>
         <span className='mb-8'>Useful links</span>
           <div className='flex flex-col font-medium text-base text-gray-500'>
           <span className='mb-4 hover:text-white cursor-pointer'>Twitter<i class="fa-brands fa-x-twitter ml-2"></i></span>
           <span className='mb-4 hover:text-white cursor-pointer'>LinkedIn<i class="fa-brands fa-linkedin ml-2"></i></span>
           <span className='mb-4 hover:text-white cursor-pointer'>GitHub<i class="fa-brands fa-github ml-2"></i></span>
           </div>
         </div>
         </div>
         <div className='h-[40%] w-full flex'>
         <div className='h-full w-1/2 flex flex-col justify-end font-medium text-xl'>
           <span className='mb-8'>Contact</span>
           <div className='flex flex-col font-medium text-base text-gray-500'>
           <span className='mb-4 hover:text-white cursor-pointer'>LinkedIn<i class="fa-brands fa-linkedin ml-2"></i></span>
           <span className='mb-4 hover:text-white cursor-pointer'>rajakyash23@gmail.com</span>
           <span className='mb-4 hover:text-white cursor-pointer'>+91 9561829120</span>
           </div>
         </div>
         <div className='h-full w-1/2 flex flex-col justify-end font-medium text-xl'>
           <span className='mb-8'>India</span>
           <div className='flex flex-col font-medium text-base text-gray-500'>
           <span className='mb-4 hover:text-white cursor-pointer'>Maharashtra</span>
           <span className='mb-4 hover:text-white cursor-pointer'>Mumbai</span>
           <span className='mb-4 hover:text-white cursor-pointer'>Vasai</span>
           </div>
         </div>
         </div>
         </div>
      </div>
    </div>
    </div>}
    </>
  )
}

export default NewNavbar
