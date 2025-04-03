import React, { useEffect } from 'react'
import yr from './yashResume.jpg'

const Resume = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div className="md:-mt-24 flex justify-center items-center h-screen">
      <iframe
        src='/Yash-Resume-ATS.pdf'
        className="md:h-[53rem] h-full md:w-[42rem] w-full border shadow-lg rounded-lg"
      ></iframe>
    </div>
  );
};

export default Resume
