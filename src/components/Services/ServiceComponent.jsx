import React from 'react'
import { Link } from 'react-router-dom'
const ServiceComponent = (props) => {
    const {img ,title ,description,url,to} = props
  return (
    <>
    <div className = "component text-white md:m-5 m-2 p-4  flex flex-col sm:flex-row items-center border-2 border-purple-400 md:rounded-3xl rounded-xl hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-purple-400" style={{ backgroundImage: "url('https://s.tmimgcdn.com/scr/800x500/361700/black-minimal-aesthetic-grid-line-pattern-background_361709-original.jpg')" }}> 
        <img className='md:w-80 h-70 md:rounded-3xl w-full rounded-xl flex' src={img}></img>
        <div className='h-full w-full font-bold md:p-3 p-1 md:text-2xl text-lg flex flex-col md:gap-6 gap-0 items-center md:text-center text-purple-400'>{title}
          <div className='font-normal md:text-xl text-base pt-3 pb-3 text-white'>{description}</div>
          <div className='h-[4rem] w-full flex md:flex-row flex-col justify-evenly items-center'>
          {url && <a className='md:w-[15rem] w-full mt-2 font-normal text-base text-center border rounded-2xl border-purple-400 hover:border-purple-500 bg-purple-400 hover:bg-purple-500 p-2 text-white ' href={url} target='_blank'>Try Project<i className="fa-solid fa-arrow-right p-1"></i></a>}
         {!url && <Link className='md:w-[15rem] w-full mt-2 font-normal text-base text-center border rounded-2xl border-purple-400 hover:border-purple-500 bg-purple-400 hover:bg-purple-500 p-2 text-white ' to={`${to}`}>View Project<i className="fa-solid fa-arrow-right p-1"></i></Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceComponent
