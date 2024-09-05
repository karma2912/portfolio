import React, { useState } from 'react'
import './Home.css'
import gsap from 'gsap'

const Navbar = () => {
    const [toggle,setToggle] = useState(false)
  return (
   <>
   <div className='fixed top-0 left-0 w-full h-24 bg-transparent text-white pt-4 flex md:justify-evenly justify-around items-center '>
    <div className='md:text-5xl text-3xl font-semibold'>Yash.</div>
    <div className='w-1/3 md:flex hidden justify-around items-center text-lg font-semibold'>
        <div className='hover:scale-125'>Home</div>
        <div className='hover:scale-125'>Services</div>
        <div className='hover:scale-125'>About Me</div>
        <div className='hover:scale-125'>Resume</div>
        <div className='hover:scale-125'>Blog</div>
    </div>
    <div className='border-2 rounded-lg md:flex hidden bg-purple-400 border-purple-400 p-3 text-base font-semibold contact hover:scale-110'>Contact me</div>
    <div><i class="fa-solid fa-bars"></i></div>
   </div>
   </>
  )
}

export default Navbar
