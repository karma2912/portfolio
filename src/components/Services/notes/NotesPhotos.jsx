import React, { useEffect } from 'react'
import note1 from "./Screenshot (21).png"
import note2 from "./Screenshot (22).png"
import note3 from "./Screenshot (23).png"
import note4 from "./Screenshot (24).png"
import note5 from "./Screenshot (25).png"
import note6 from "./Screenshot (26).png"
import note7 from "./Screenshot (27).png"
import note8 from "./Screenshot (28).png"
import { Link, useNavigate } from 'react-router-dom';
const NotesPhotos = () => {
  const navigate = useNavigate()
  const goBack =()=>{
    navigate(-1)
  }
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      return (
        <>
        <div className='h-full w-full bg-black'>
          <Link className='md:text-4xl text-3xl border-2 border-white pt-2 pb-2 pl-4 pr-4 rounded-full ml-7 top-10 sticky hover:text-slate-400 hover:border-slate-400 ' onClick={goBack}><i className="fa-solid fa-arrow-left"></i></Link>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>Login Page</p> 
              <img src={note1} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'> 
              <p className='text-2xl'>SignUp Page</p>
              <img src={note2} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
            <p className='text-2xl'>Home Page</p>
              <img src={note3} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>Added Notes</p> 
              <img src={note4} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>About Page</p> 
              <img src={note5} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>Contact Page</p> 
              <img src={note6} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>Users Database</p> 
              <img src={note7} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>Notes Database</p> 
              <img src={note8} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
          </div>
        </div>
        </>
      )
}

export default NotesPhotos
