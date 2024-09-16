import React from 'react'
import QuizPhotos from './Quiz/QuizPhotos'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
const ServiceComponent = (props) => {
    const {img ,title ,description,url,to} = props
  return (
    <>
    <div className = "component text-white m-5 p-4 flex flex-col sm:flex-row items-center  border-2 border-purple-400 rounded-3xl hover:transition duration-300 hover:border-4 hover:shadow-2xl hover:border-purple-400"> 
        <img className='w-80 rounded-3xl flex' src={img}></img>
        <div className='h-full w-full font-bold p-3 text-2xl flex flex-col gap-6 items-center text-center'>{title}
          <div className='font-normal text-xl pt-3 pb-3'>{description}</div>
          <div className='md:h-[4rem] h-[8rem] w-full flex md:flex-row flex-col justify-evenly items-center'>
          {url && <a className='md:w-[15rem] w-full mt-2 font-normal text-base hover:text-lg border rounded-2xl border-purple-400 hover:border-purple-500 bg-purple-400 hover:bg-purple-500 p-2 hover:p-3 text-white ' href={url} target='_blank'>Try Project<i className="fa-solid fa-arrow-right p-1"></i></a>}
         {!url && <Link className='md:w-[15rem] w-full mt-2 font-normal text-base hover:text-lg border rounded-2xl border-purple-400 hover:border-purple-500 bg-purple-400 hover:bg-purple-500 p-2 hover:p-3 text-white ' to={`${to}`}>View Project<i className="fa-solid fa-arrow-right p-1"></i></Link>}
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceComponent
