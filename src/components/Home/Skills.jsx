import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import react from "./react.png"
import nodejs from "./nodejs.png"
import mongodb from "./mongodb.jpg"
import webRTC from "./webRTC.png"
import socketio from "./socketio.png"
import gsapimg from "./gsap.jpg"
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  return (
    <div className='md:min-h-[100vh] min-h-[200vh] w-full bg-slate-50 pb-20' >
      <div className='text-black md:h-[14vw] h-[35vw] flex justify-around items-end'>
        <span className='md:text-[5vw] text-[10vw] yashs flex items-baseline'>Development Skill<p className='text-2xl ml-2'>s</p></span>
        <i className='fa-solid fa-arrow-down text-[6vw] rotate-45'></i>
      </div>
      <div className='md:min-h-[30vw] min-h-[100vw] h- flex md:flex-row flex-col justify-evenly md:items-end items-center mt-20'>
        <a className='h-full md:pb-14' href='https://react.dev/learn' target='_blank'><img src={react} className='md:h-[25vw] h-[75vw] md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
        <a className='h-full flex justify-center items-center' href='https://nodejs.org/docs/latest/api/' target='_blank'><img src={nodejs} className='md:h-[25vw] h-[75vw] md:w-[22vw] md:mt-0 mt-20 rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
      </div>
      <div className='md:min-h-[30vw] min-h-[100vw] flex md:flex-row flex-col justify-evenly md:items-start items-center md:mt-20 mt-[35vw] '>
        <a className='h-full md:pt-14' href='https://www.mongodb.com/docs/' target='_blank'><img src={mongodb} className='md:h-[25vw] h-[75vw] md:mt-0  md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
        <a className='h-full flex justify-center items-start' href='https://webrtc.org/' target='_blank'><img src={webRTC} className='md:h-[25vw] h-[75vw] md:mt-0 mt-20 md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
      </div>
      <div className='md:min-h-[30vw] min-h-[100vw] flex md:flex-row flex-col justify-evenly md:items-start items-center md:mt-20 mt-[35vw] '>
        <a className='h-full md:pt-14' href='https://socket.io/docs/v4/' target='_blank'><img src={socketio} className='md:h-[25vw] h-[75vw] md:mt-0  md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
        <a className='h-full flex justify-center items-start' href='https://gsap.com/docs/v3/' target='_blank'><img src={gsapimg} className='md:h-[25vw] h-[75vw] md:mt-0 mt-20 md:w-[22vw] rounded-[2vw] shadow-xl hover:shadow-2xl shadow-black cursor-pointer'></img></a>
      </div>
    </div>
  );
};

export default Skills;