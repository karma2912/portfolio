import React, { useEffect } from "react";
import au from "./aboutmejpg.png";
import ay from './yashAbout.jpg'
import gsap from "gsap";
const About = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <>
      <div className="text-white min-h-screen w-full ">
        <div className="md:h-[30rem] min-h-[10rem] w-full absolute z-30 top-0">
          <div className=" w-full ">
            <img src={au} className="md:h-[30rem] h-[10rem] w-full"></img>
          </div>
        </div>
        <div className="h-full w-full md:pt-[30rem] pt-24  flex flex-col md:gap-28 gap-14 justify-center items-center">
         <div className="w-11/12 text-md flex md:flex-row flex-col justify-around items-center">
           <div className="h-[29rem] md:h-[40rem] md:w-1/3 w-full flex flex-col justify-evenly text-center  border-2 border-slate-400 p-2 rounded-xl" ><div className="text-5xl font-bold meet ">Meet Yash Rajak,</div>
           <div className="text-lg text-start meet ">Heyy , I am Yash a Web Designer Passionate for my work .I help businesses to go online thorugh the modern Websites, Whether its an Ecommerce , Info or any  type of website .I have gain all the skills and mastered through creating various types of projects for my personal practice as well as for my clients and All of these i have learned,practiced and done at the age of 17.</div></div>
           <div className="h-[29rem] md:h-[40rem] md:w-1/3 w-full flex justify-center items-center"><img className="md:w-full w-[28rem]" src={ay}></img></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
