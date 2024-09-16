import React, { useEffect } from 'react'
import n1 from './Screenshot (17).png'
import n2 from './Screenshot (18).png'
import n3 from './Screenshot (19).png'
import n4 from './Screenshot (20).png'
import { Link } from 'react-router-dom';

const NewsPhotos = () => {
    useEffect(()=>{
        window.scrollTo(0, 0);
      },[])
      return (
        <>
        <div className='h-full w-full bg-black'>
          <Link className='md:text-4xl text-3xl border-2 border-white pt-2 pb-2 pl-4 pr-4 rounded-full ml-7 top-10 sticky hover:text-slate-400 hover:border-slate-400 ' to='/services'><i className="fa-solid fa-arrow-left"></i></Link>
          <div className='h-full w-full flex flex-col justify-center items-center'>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>General Section</p> 
              <img src={n1} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'> 
              <p className='text-2xl'>Technology Section</p>
              <img src={n2} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
            <p className='text-2xl'>Sports Section</p>
              <img src={n3} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
            <div className='md:h-[50rem] h-[22rem] w-full flex flex-col gap-4 items-center pt-10'>
             <p className='text-2xl '>Business Section</p> 
              <img src={n4} className='md:h-[43rem] h-[15rem] md:w-5/6 w-11/12'></img>
            </div>
          </div>
        </div>
        </>
      )
}

export default NewsPhotos
          