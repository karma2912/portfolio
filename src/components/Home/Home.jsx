import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import yellowHex from './yashPfp.webp'
import './Home.css'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
const Home = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
      gsap.from(
          '.yash',
          { 
          opacity: 0,
          duration:1.3,
          y: 100 
          }
      );
      gsap.from(
          '.yash-inner',
          { 
          opacity: 0,
          duration:1.3,
          y: 100 
          }
      );
      gsap.from(
          '.about',
          { 
          opacity: 0,
          duration:1.3,
          y: 100 
          }
      );
      gsap.from(
          '.work',
          { 
          opacity: 0,
          duration:1.3,
          y: 100 
          }
      );
      gsap.from(
          '.info',
          { 
          opacity: 0,
          duration:1.3,
          x:-1100 
          }
      );
      gsap.from(
          '.image-inner',
          { 
          duration:1.3,
          y:600 
          }
      );
     

  },[])
  
  return (
    <>
    <div className="min-h-screen w-full flex md:flex-row flex-col bg-black text-white">
      <div className="md:h-screen h-[80rem] md:w-1/2 w-full text-white flex flex-col justify-evenly items-center 2xl:pl-60 xl:pl-40 pl-10 md:pr-20 pr-10 ">
        <div className="min-h-1/2">
          <div className="md:text-[7rem] text-8xl font-semibold yash ml-20">Hey,  <span className="font-thin">I am</span> Yash</div>
          <div className="pt-10 text-lg font-medium yash-inner text-gray-500">
            I am a Web developer & I am very passionate and dedicated to my work,
            I have acquired the skills and knowledge necessary to make your
            project a success
          </div>
          <div className="pt-14 flex items-center gap-9 text-lg font-medium">
            <Link className="border-2 text-base md:h-12 md:w-32 bg-purple-400 border-purple-400 p-4 rounded-xl hover:scale-110 about flex justify-center items-center" to='/about'>
            <div className="hover:text-lg">About Me</div>
            </Link>
            <div className="flex gap-3">
              <Link className="text-base hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white hover:text-lg work" to='/services'>
                My Works <i className="fa-solid fa-greater-than"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:h-fit flex lg:flex-row flex-col w-full justify-between h-[20rem] info ">
          <div className="inner-info">
            <div className="md:text-lg text-xl">Born in</div>
            <div className="md:text-2xl text-5xl font-semibold">Mumbai</div>
          </div>
          <div className="inner-info">
            <div className="text-lg">Experience</div>
            <div className="md:text-2xl text-5xl font-semibold">1+ Years</div>
          </div>
          <div className="inner-info">
            <div className="text-lg">Date of birth</div>
            <div className="md:text-2xl text-5xl font-semibold">29 Dec 2006</div>
          </div>
        </div>
      </div>
      <div className="md:h-screen min-h-[35rem] md:w-1/2 w-full text-white flex md:flex-row flex-col md:justify-evenly justify-center items-center pr-30 pl-30 md:pb-16 pt-0">
      <div className="md:h-[35rem] md:w-[38rem] image flex justify-center items-start" style={{clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 71% 82%, 26% 82%, 0% 50%)',backgroundColor: "rgba(167, 139, 202, 1)",border:'1px',borderColor:"purple",
      }}><img src={yellowHex} className="md:h-[30rem] md:w-[30rem] image-inner"></img></div>
      <div className="flex md:flex-col flex-row justify-around md:h-52 h-fit text-lg md:w-fit w-full">
        <a className="fa-brands fa-github border border-black rounded-full bg-black p-3 text-center meta hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white" href="https://github.com/karma2912" target="_blank"></a>
        <a className="fa-brands fa-x-twitter border border-black rounded-full bg-black p-3 text-center twitter hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white" href="https://x.com/YashRaj45608052" target="_blank"></a>
        <a className="fa-brands fa-linkedin-in border border-black rounded-full bg-black p-3 text-center li hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white" href="https://www.linkedin.com/in/yash-rajak?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank"></a>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
