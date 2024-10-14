import React from "react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Home from "../Home/Home";
import Navbar from "../Navbar";
const Loader = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursor = useRef(null);
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const tl = gsap.timeline();
  useEffect(() => {
    gsap.to(cursor.current, {
      x: position.x,
      y: position.y,
      ease: "back.out(1.7)",
    });
  }, [position]);

  useEffect(() => {

    tl.from(".child", {
      duration: 2,
      y: 300
    });
    tl.to(".child",{
        duration:2,
        delay:0.5,
        y:-300
    })
    tl.to(".block",{
        opacity:1,
        delay:-1,
        width:'300px',
        duration:0.5
    })
    tl.from(".block",{
      x:200,
      delay:-3,
      ease: "bounce.out",
      duration:0.5
    })
    tl.to(".block",{
      width:0,
      duration:0.5
    })
    tl.to(".yash",{
      opacity:1,
      delay:-0.5,
      x:-100,
    })
   tl.to(".purple",{
    height:"100%",
    delay:0.2,
    duration:0.5
   })
   tl.to('.home',{
    top:0,
    minHeight: "100%",
    delay:-0.6,
    duration:1
   })
  }, []);
  return (
    <>
      <div ref={cursor} className="flex justify-center items-center h-full w-full ">
        <div className="overflow-hidden absolute h-20 md:w-[40rem] w-[22rem]">
          <div className="md:text-[3rem] text-[1.7rem] font-light child flex justify-between items-center w-full">
            <span className="stag-child">Pioneering</span>
            <span className="font-semibold stag-child">Creative</span>
            <span className="stag-child">Excellence</span>
          </div>
        </div>
        <div className="h-16 w-0 bg-purple-400 block opacity-0 absolute"><div className="text-[3rem] relative opacity-0 yash font-normal">Yash.com</div></div>
       </div>
       <div className="h-0 w-full bg-purple-400 absolute bottom-0 purple"></div>
       <div className="h-0 home absolute bottom-0 bg-black overflow-scroll">
        <Navbar/>
        <Home/>
       </div>
    </>
  );
};

export default Loader;
