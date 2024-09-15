import React, { useEffect } from 'react'
import yr from './yashResume.jpg'

const Resume = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
        <img src={yr} className='md:h-screen h-[40rem]'></img>
    </div>
    </>
  )
}

export default Resume
