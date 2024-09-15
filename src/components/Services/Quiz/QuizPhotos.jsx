import React from 'react'
import { Link } from 'react-router-dom'
import login from './Screenshot (15).png'
import home1 from './Screenshot (6).png'
import home2 from './Screenshot (7).png'
import home3 from './Screenshot (8).png'
import sub1 from './Screenshot (9).png'
import sub2 from './Screenshot (10).png'
import test1 from './Screenshot (12).png'
import test2 from './Screenshot (13).png'
import result1 from './Screenshot (14).png'

const QuizPhotos = () => {
  return (
    <>
    <div className='h-full w-full bg-black'>
      <Link className='md:text-4xl text-3xl border-2 border-white pt-2 pb-2 pl-4 pr-4 rounded-full ml-7 top-10 sticky' to='/services'><i class="fa-solid fa-arrow-left"></i></Link>
      <div className='h-full w-full flex flex-col justify-center items-center'>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
         <p className='text-2xl '>Login Page</p> 
          <img src={login} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'> 
          <p className='text-2xl'>Home Page</p>
          <img src={home1} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
          <img src={home2} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
          <img src={home3} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
         <p className='text-2xl '>Subject Page</p> 
          <img src={sub1} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
          <img src={sub2} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
         <p className='text-2xl '>Test Page</p> 
          <img src={test1} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
          <img src={test2} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
        <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
         <p className='text-2xl '>Result Page</p> 
          <img src={result1} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
        </div>
      </div>
    </div>
    </>
  )
}

export default QuizPhotos
