import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = () => {
    const menuRef = useRef(null)
    const [toggle,setToggle] = useState(false)
    const handleToggle=()=>{
      setToggle(!toggle)
    }  
    useEffect(()=>{
      if(menuRef.current === null){
        console.log("Errorr")
      }
      else{
      console.log(menuRef.current)
      gsap.to('#menu',{
        right:'0px',
        duration:0.5,
        stagger:0.3
      })
      gsap.from(".box",{
        x:100,
        duration:0.4,
        stagger:0.1
      })
      }
    },[toggle])
  return (
   <>
   <div className='w-full h-24 bg-transparent text-white pt-4 flex md:justify-evenly justify-around items-center border-b-[1px] '>
    <div className='md:text-5xl text-3xl font-semibold'>Yash.</div>
    <div className='w-1/3 md:flex hidden justify-around items-center text-lg font-semibold'>
        <Link className='hover:scale-125 hover:cursor-pointer hover:shadow-2xl hover:shadow-white ' to="/">Home</Link>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white' to="/services">Services</Link>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white' to='/about'>About Me</Link>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white'>Resume</Link>
    </div>
    <Link className='border-2 rounded-lg md:flex hidden bg-purple-400 border-purple-400 p-3 text-base font-semibold contact hover:scale-110 cursor-pointer' to="/contact">Contact me</Link>
    <div className='md:hidden flex' onClick={handleToggle}><i className="fa-solid fa-bars"></i></div>
   </div>
   {toggle && <div className='h-[30rem] w-2/3 fixed top-10 -right-2/3 bg-white bg-opacity-85 overflow-y-hidden menu z-20' id='menu' ref={menuRef}>
   <div className=' h-16 w-full flex justify-end pr-6  items-center'>
     <i className="fa-solid fa-xmark text-2xl " onClick={handleToggle}></i>
   </div>
   <div className='h-[30rem] flex flex-col gap-8 items-start text-2xl p-10'>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white box' to="/" onClick={handleToggle}>Home</Link>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white box' to="/services" onClick={handleToggle}>Services</Link>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white box' to='/about' onClick={handleToggle}>About Me</Link>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white box' onClick={handleToggle}>Resume</Link>
        <Link className='hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white box' to='/contact' onClick={handleToggle}>Contact Me</Link>
   </div>
   </div>}
   </>
  )
}

export default Navbar