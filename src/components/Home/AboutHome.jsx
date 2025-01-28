import React from "react";
import workImage from "./workImage.jpg";
import gsap from "gsap"
const AboutHome = () => {
  const mouseEnterbrand =()=>{
     gsap.to('.brand',{
      opacity:1,
      duration:0.5,
     })
     gsap.to('.bbox',{
      width:"100%",
      duration:0.8
     })
     gsap.to('.bicon',{
      scale:3,
      duration:0.5,
      borderColor:"#A855F7",
      backgroundColor:"#A855F7"
     })
     gsap.from('.brand',{
      y:20
     })
  }
  const mouseEnterSecond =()=>{
     gsap.to('.second',{
      opacity:1,
      duration:0.5,
     })
     gsap.to('.sbox',{
      width:"100%",
      duration:0.8
     })
     gsap.to('.sicon',{
      scale:3,
      duration:0.5,
       borderColor:"#A855F7",
      backgroundColor:"#A855F7"
     })
     gsap.from('.second',{
      y:20
     })
  }
  const mouseEnterThird =()=>{
     gsap.to('.third',{
      opacity:1,
      duration:0.5,
     })
     gsap.to('.tbox',{
      width:"100%",
      duration:0.8
     })
     gsap.to('.ticon',{
      scale:3,
      duration:0.5,
       borderColor:"#A855F7",
      backgroundColor:"#A855F7"
     })
     gsap.from('.third',{
      y:20
     })
  }
  const mouseEnterFourth =()=>{
     gsap.to('.fourth',{
      opacity:1,
      duration:0.5,
     })
     gsap.to('.fbox',{
      width:"100%",
      duration:0.8
     })
     gsap.to('.ficon',{
      scale:3,
      duration:0.5,
       borderColor:"#A855F7",
      backgroundColor:"#A855F7"
     })
     gsap.from('.fourth',{
      y:20
     })
  }
  const mouseLeavebrand = ()=>{
    gsap.to('.brand',{
      opacity:0,
      duration:0.5,
    })
    gsap.to('.bbox',{
      width:'0px',
      duration:0.8
    })
    gsap.to('.bicon',{
      scale:1,
      duration:0.5,
      backgroundColor:"#6B7280",
      borderColor:"#6B7280"
     })
  }
  const mouseLeaveSecond = ()=>{
    gsap.to('.second',{
      opacity:0,
      duration:0.5,
    })
    gsap.to('.sbox',{
      width:'0px',
      duration:0.8
    })
    gsap.to('.sicon',{
      scale:1,
      duration:0.5,
      backgroundColor:"#6B7280",
      borderColor:"#6B7280"
     })
  }
  const mouseLeaveThird = ()=>{
    gsap.to('.third',{
      opacity:0,
      duration:0.5,
    })
    gsap.to('.tbox',{
      width:'0px',
      duration:0.8
    })
    gsap.to('.ticon',{
      scale:1,
      duration:0.5,
      backgroundColor:"#6B7280",
      borderColor:"#6B7280"
     })
  }
  const mouseLeaveFourth = ()=>{
    gsap.to('.fourth',{
      opacity:0,
      duration:0.5,
    })
    gsap.to('.fbox',{
      width:'0px',
      duration:0.8
    })
    gsap.to('.ficon',{
      scale:1,
      duration:0.5,
      backgroundColor:"#6B7280",
      borderColor:"#6B7280"
     })
  }
  return (
    <div className="md:h-[97vh] h-[250vh] bg-black flex justify-center items-center ">
      <div className="h-full w-full flex flex-col justify-between items-center">
        <div className="h-48 md:w-[40vw] w-11/12 flex md:justify-end justify-center items-end text-gray-500 font-medium md:text-right text-center mb-14">
          Professionals focuesd on helping your brand
          <br />
          grow and move forward
        </div>
        <div className="h-full  w-full flex flex-col justify-between items-center">
          <div className="md:h-1/2 h-1/4 md:w-2/3 w-11/12  flex flex-col justify-center items-center">
            <div className="flex md:text-[4.5vw] text-[10vw] font-medium justify-center items-center">
              <div className="h-20 overflow-y-hidden rounded-[10vw] md:block hidden">
                <img src={workImage} className="h-40 w-[13vw] " />
              </div>
              <p className="md:pl-5 pl-0">Unique</p><p className="font-light md:pl-5 pl-2">Ideas</p>
            </div>
            <div className="flex md:text-[4.5vw] text-[10vw] font-medium justify-center items-center md:flex-row flex-col "><div className="flex">For Your<p className="font-light pl-5">Business.</p></div><button className="md:h-20 h-16 md:w-[12vw] w-[60vw] bg-purple-400 hover:bg-purple-500 rounded-[10vw] md:text-[0.7vw] text-[3vw] md:ml-8 ml-0 flex justify-center items-center md:mt-0 mt-10 text-black">WHAT I DO<i className="fa-solid fa-arrow-right ml-5 md:text-3xl text-xl text-black"></i></button></div>
          </div>
          <div className="md:h-1/2 h-full md:w-2/3 w-full flex justify-center items-center md:flex-row flex-col md:mt-0 mt-16">
          <div className="h-full md:w-1/4 w-11/12 border-l-[0.1vw] border-gray-700 border-t-[0.1vw]  md:border-r-0 border-r-[0.1vw]" onMouseEnter={mouseEnterbrand} onMouseLeave={mouseLeavebrand}>
          <div className="h-1 w-0 bg-purple-400 relative left-0 bbox"></div>
          <div className="h-full w-full flex flex-col justify-evenly items-center">
            <div className="md:text-[1.2vw] text-[4.5vw] md:w-[10vw] w-full text-left md:ml-0 ml-16 font-medium items-start">Branding and Identity Design</div>
            <div className="h-1/2 md:w-[13vw] w-full flex flex-col justify-around items-start">
              <div className="md:text-[0.8vw] text-[4vw] md:w-[12vw] w-full items-start md:ml-0 ml-8 opacity-0 brand text-gray-500">Our creative agency is team of Professionals foucsed on helping your brand grow</div>
              <button className="md:w-[12vw] w-full flex justify-start ml-3 "><i className="fa-solid fa-arrow-right md:text-[0.5vw] text-[2.3vw] md:pt-0 pt-[0.3vw] bicon text-center text-black border h-3 w-3 border-gray-500 bg-gray-500 rounded-full md:ml-0 ml-8"></i></button>
            </div>
            </div>
          </div>
          <div className="h-full md:w-1/4 w-11/12 border-l-[0.1vw] border-gray-700 border-t-[0.1vw] md:border-r-0 border-r-[0.1vw]" onMouseEnter={mouseEnterSecond} onMouseLeave={mouseLeaveSecond}>
          <div className="h-1 w-0 bg-purple-400 relative left-0 sbox"></div>
          <div className="h-full w-full flex flex-col justify-evenly items-center">
          <div className="md:text-[1.2vw] text-[4.5vw] md:w-[10vw] w-full text-left md:ml-0 ml-16 font-medium items-start">Website Design <br/>and Development</div>
            <div className="h-1/2 md:w-[13vw] w-full flex flex-col justify-around items-start">
              <div className="md:text-[0.8vw] text-[4vw] md:w-[12vw] w-full items-start md:ml-0 ml-8 opacity-0 second text-gray-500">Our creative agency is team of Professionals foucsed on helping your brand grow</div>
              <button className="md:w-[12vw] w-full flex justify-start ml-3 "><i className="fa-solid fa-arrow-right md:text-[0.5vw] text-[2.3vw] md:pt-0 pt-[0.3vw] sicon text-center text-black border h-3 w-3 border-gray-500 bg-gray-500 rounded-full md:ml-0 ml-8"></i></button>
            </div>
            </div>
          </div>
          <div className="h-full md:w-1/4 w-11/12 border-l-[0.1vw] border-gray-700 border-t-[0.1vw] md:border-r-0 border-r-[0.1vw]" onMouseEnter={mouseEnterThird} onMouseLeave={mouseLeaveThird}>
          <div className="h-1 w-0 bg-purple-400 relative left-0 tbox"></div>
          <div className="h-full w-full flex flex-col justify-evenly items-center">
          <div className="md:text-[1.2vw] text-[4.5vw] md:w-[12vw] w-full text-left md:ml-0 ml-16 font-medium items-start">Advertising and <br/>Marketing Campaigns</div>
            <div className="h-1/2 md:w-[13vw] w-full flex flex-col justify-around items-start">
              <div className="md:text-[0.8vw] text-[4vw] md:w-[12vw] w-full items-start md:ml-0 ml-8 opacity-0 third text-gray-500">Our creative agency is team of Professionals foucsed on helping your brand grow</div>
              <button className="md:w-[12vw] w-full flex justify-start ml-3 "><i className="fa-solid fa-arrow-right md:text-[0.5vw] text-[2.3vw] md:pt-0 pt-[0.3vw] ticon text-center text-black border h-3 w-3 border-gray-500 bg-gray-500 rounded-full md:ml-0 ml-8"></i></button>
            </div>
            </div>
           </div>
          <div className="h-full md:w-1/4 w-11/12 border-l-[0.1vw] border-gray-700 border-t-[0.1vw] border-r-[0.1vw]" onMouseEnter={mouseEnterFourth} onMouseLeave={mouseLeaveFourth}>
          <div className="h-1 w-0 bg-purple-400 relative left-0 fbox"></div>
          <div className="h-full w-full flex flex-col justify-evenly items-center">
          <div className="md:text-[1.2vw] text-[4.5vw] md:w-[12vw] w-full text-left md:ml-0 ml-16 font-medium items-start">Creative Consulting<br/>and Development</div>
            <div className="h-1/2 md:w-[13vw] w-full flex flex-col justify-around items-start">
              <div className="md:text-[0.8vw] text-[4vw] md:w-[12vw] w-full items-start md:ml-0 ml-8 opacity-0 fourth text-gray-500">Our creative agency is team of Professionals foucsed on helping your brand grow</div>
              <button className="md:w-[12vw] w-full flex justify-start ml-3 "><i className="fa-solid fa-arrow-right md:text-[0.5vw] text-[2.3vw] md:pt-0 pt-[0.3vw] ficon text-center text-black border h-3 w-3 border-gray-500 bg-gray-500 rounded-full md:ml-0 ml-8"></i></button> 
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
