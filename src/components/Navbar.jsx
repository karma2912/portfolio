import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import gsap from 'gsap'

const Navbar = (props) => {
  const {text} = props
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
      }
    },[toggle])
  return (
   <>
   <div className='w-full h-24 bg-transparent backdrop-blur-sm pt-4 flex md:justify-evenly justify-around items-center z-40 top-0 sticky'>
    <div className='md:text-5xl text-3xl font-semibold'>Yash.</div>
    <div className='w-1/3 md:flex hidden justify-around items-center text-lg font-semibold'>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":`hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white ${text}`}} to="/">Home</NavLink>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":`hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white ${text}`}} to="/services">Services</NavLink>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":`hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white ${text}`}} to='/about'>About Me</NavLink>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":`hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white ${text}`}} to='/resume'>Resume</NavLink>
    </div>
    <NavLink className='border-2 rounded-lg md:flex hidden bg-purple-400 border-purple-400 p-3 text-base font-semibold contact hover:scale-110 cursor-pointer' to="/contact">Contact me</NavLink>
    <div className='md:hidden flex' onClick={handleToggle}><i className="fa-solid fa-bars"></i></div>
   </div>
   {toggle && <div className='h-[30rem] w-2/3 fixed top-10 -right-2/3 text-black bg-white bg-opacity-85 overflow-y-hidden menu z-50' id='menu' ref={menuRef}>
   <div className=' h-16 w-full flex justify-end pr-6  items-center'>
     <i className="fa-solid fa-xmark text-2xl " onClick={handleToggle}></i>
   </div>
   <div className='h-[30rem] flex flex-col gap-8 items-start text-2xl p-10'>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-black"}} to="/" onClick={handleToggle}>Home</NavLink>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-black"}} to="/services" onClick={handleToggle}>Services</NavLink>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-black"}} to='/about' onClick={handleToggle}>About Me</NavLink>
        <NavLink className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-black"}} to='/resume' onClick={handleToggle}>Resume</NavLink>
        <NavLink  className={(e)=>{return e.isActive?"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-purple-400":"hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white text-black"}} to='/contact' onClick={handleToggle}>Contact Me</NavLink>
   </div>
   </div>}
   </>
  )
}

export default Navbar