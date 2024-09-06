import React, { useEffect } from "react";
import yellowHex from './yellowHexf.webp'
import './Home.css'
import gsap from "gsap";
const Home = () => {
  
  return (
    <>
    <div className="min-h-screen w-full flex md:flex-row flex-col">
      <div className="md:h-screen h-[80rem] md:w-1/2 w-full text-white flex flex-col md:justify-around justify-around items-center 2xl:pl-60 xl:pl-40 pl-14 md:pr-20 pr-10 md:pt-24 pt-24">
        <div className="min-h-1/2">
          <div className="md:text-9xl text-8xl font-semibold">Hey, I am Yash</div>
          <div className="pt-10 text-lg font-medium">
            I am Web developer & I am very passionate and dedicated to my work,
            I have acquired the skills and knowledge necessary to make your
            project a success
          </div>
          <div className="pt-14 flex items-center gap-9 text-lg font-medium">
            <button className="border-2 text-base bg-purple-400 border-purple-400 p-4 rounded-xl hover:scale-110">
              About Me
            </button>
            <div className="flex gap-3">
              <a className="text-base hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white">
                My Works <i className="fa-solid fa-greater-than"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="md:h-fit flex lg:flex-row flex-col w-full justify-between h-[20rem]">
          <div>
            <div className="md:text-lg text-xl">Born in</div>
            <div className="md:text-2xl text-5xl font-semibold">Mumbai</div>
          </div>
          <div>
            <div className="text-lg">Experience</div>
            <div className="md:text-2xl text-5xl font-semibold">1+ Years</div>
          </div>
          <div>
            <div className="text-lg">Date of birth</div>
            <div className="md:text-2xl text-5xl font-semibold">29 Dec 2006</div>
          </div>
        </div>
      </div>
      <div className="md:h-screen h-[50rem] md:w-1/2 w-full text-white flex md:flex-row flex-col justify-evenly items-center pr-30 pl-30 md:pt-24 pt-10">
      <div className=""><img src={yellowHex} className="w-[50rem]"></img></div>
      <div className="flex md:flex-col flex-row justify-around md:h-52 h-fit text-lg md:w-fit w-full">
        <i className="fa-brands fa-meta border border-black rounded-full bg-black p-3 text-center meta hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white"></i>
        <i className="fa-brands fa-x-twitter border border-black rounded-full bg-black p-3 text-center twitter hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white"></i>
        <i className="fa-brands fa-linkedin-in border border-black rounded-full bg-black p-3 text-center li hover:scale-125 cursor-pointer hover:shadow-2xl hover:shadow-white"></i>
        </div>
      </div>
      </div>
    </>
  );
};

export default Home;
