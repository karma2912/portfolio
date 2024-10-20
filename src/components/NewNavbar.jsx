import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const NewNavbar = () => {
  const [toggle,setToggle] = useState(false)
  const handleClick=()=>{
    setToggle(toggle===false?true:false)
    console.log("clicked")
  }
  return (
    <>
    <div className='w-full h-24 bg-transparent pt-4 pb-4 flex md:justify-evenly justify-around items-center z-40 top-0 sticky'>
        <div className='w-full h-full flex justify-between items-end'>
         <div className='text-4xl pl-16'>
            Y.
         </div>
         <div className='pr-20'>
         <i className="fa-solid fa-bars text-2xl" onClick={handleClick}></i>
         </div>
        </div>
    </div>
   {toggle && <div className='h-screen w-full bg-black sticky top-0 z-30 gradient-bg -mt-24'>
    <div className='h-full w-full bg-black '>
      <div className='h-full md:w-[46%] w-[100%] md:border-r border-gray-700'>
         <div className='h-full w-full flex md:pl-28 flex-col justify-center items-center'>
            <div className='h-56 md:w-[16vw]  flex flex-col justify-between md:items-start items-center'>
            <NavLink className={(e)=>{return e.isActive?"text-orange-300 md:text-4xl text-3xl":`text-white md:text-4xl text-3xl`}} to="/" onClick={handleClick}>Homepage</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-orange-300 md:text-4xl text-3xl":`text-white md:text-4xl text-3xl`}} to="/services" onClick={handleClick}>Services</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-orange-300 md:text-4xl text-3xl":`text-white md:text-4xl text-3xl`}} to="/resume" onClick={handleClick}>Resume</NavLink>
            <NavLink className={(e)=>{return e.isActive?"text-orange-300 md:text-4xl text-3xl":`text-white md:text-4xl text-3xl`}} to="/contact" onClick={handleClick}>Contact Me</NavLink>
            </div>
         </div>
      </div>
      <div>
         <div></div>
         <div></div>
      </div>
    </div>
    </div>}
    </>
  )
}

export default NewNavbar
