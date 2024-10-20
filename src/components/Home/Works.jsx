import React, { useEffect } from 'react';
import img from './leftDown.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import quizpf from './quizpf.webp'
import news from './news.jpg'
import notes from './notes.jpg'
import password from './password.jpg'

gsap.registerPlugin(ScrollTrigger);

const Works = () => {
  useEffect(() => {
    
  }, []);

  return (
    <div className='md:min-h-[100vh] min-h-[200vh] w-full bg-slate-50 pb-20' >
      <div className='text-black md:h-[14vw] h-[35vw] flex justify-around items-end'>
        <span className='md:text-[5vw] text-[10vw] yashs flex items-baseline'>View Project<p className='text-2xl ml-2'>s</p></span>
        <i className='fa-solid fa-arrow-down text-[6vw] rotate-45'></i>
      </div>
      <div className='md:min-h-[30vw] min-h-[100vw] h- flex md:flex-row flex-col justify-evenly md:items-end items-center mt-20'>
        <div className='h-full md:pb-14'><img src={quizpf} className='md:h-[25vw] h-[75vw] md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></div>
        <div className='h-full flex justify-center items-center'><img src={news} className='md:h-[25vw] h-[75vw] md:w-[22vw] md:mt-0 mt-20 rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></div>
      </div>
      <div className='md:min-h-[30vw] min-h-[100vw] flex md:flex-row flex-col justify-evenly md:items-start items-center md:mt-20 mt-[35vw] '>
        <div className='h-full md:pt-14'><img src={notes} className='md:h-[25vw] h-[75vw] md:mt-0  md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></div>
        <a className='h-full flex justify-center items-start'><img src={password} className='md:h-[25vw] h-[75vw] md:mt-0 mt-20 md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
      </div>
    </div>
  );
};

export default Works;