import React from 'react'
import yr from './yashResume.jpg'

const Resume = () => {
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
        <img src={yr} className='md:h-screen h-[40rem]'></img>
    </div>
    </>
  )
}

export default Resume
