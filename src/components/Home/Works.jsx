import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import quizpf from './quizpf.webp'
import news from './news.jpg'
import notes from './notes.jpg'
import password from './password.jpg'
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Works = () => {

  return (
    <div className='md:min-h-[100vh] min-h-[200vh] w-full bg-slate-50 pb-20' >
      <div className='text-black md:h-[14vw] h-[35vw] flex justify-around items-end'>
        <span className='md:text-[5vw] text-[10vw] yashs flex items-baseline'>View Project<p className='text-2xl ml-2'>s</p></span>
        <i className='fa-solid fa-arrow-down text-[6vw] rotate-45'></i>
      </div>
      <div className='md:min-h-[30vw] min-h-[100vw] h- flex md:flex-row flex-col justify-evenly md:items-end items-center mt-20'>
        <Link className='h-full md:pb-14' to="/QuizPhotos"><img src={quizpf} className='md:h-[25vw] h-[75vw] md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></Link>
        <Link className='h-full flex justify-center items-center' to="/NewsPhotos"><img src={news} className='md:h-[25vw] h-[75vw] md:w-[22vw] md:mt-0 mt-20 rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></Link>
      </div>
      <div className='md:min-h-[30vw] min-h-[100vw] flex md:flex-row flex-col justify-evenly md:items-start items-center md:mt-20 mt-[35vw] '>
        <Link className='h-full md:pt-14' to="/NotesPhotos"><img src={notes} className='md:h-[25vw] h-[75vw] md:mt-0  md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></Link>
        <a className='h-full flex justify-center items-start' href='https://sensational-selkie-288764.netlify.app/'><img src={password} className='md:h-[25vw] h-[75vw] md:mt-0 mt-20 md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
      </div>
    </div>
  );
};

export default Works;