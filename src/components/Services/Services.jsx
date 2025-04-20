import React, { useEffect } from 'react'
import ServiceComponent from './ServiceComponent'
import quizpf from './quizpf.webp'
import news from './news.jpg'
import notes from './notes.jpg'
import password from './password.jpg'
import cranepf from './khanCraneLogo.webp'
import yd from './yashDevelops.jpg'

const Services = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <>
    <div className='min-h-screen w-full text-white mt-10 flex flex-col'>
      <div className=' text-7xl mb-14 w-full  text-center flex justify-around '>
        <div>What I Did</div>
        <div className='md:flex hidden'><i className='fa-solid fa-arrow-down text-[6vw] rotate-45'></i></div>
      </div>
      <ServiceComponent img={quizpf} title="Quiz Quest" description="Quiz App is an app which auto updates the difficulty of questions,user can select easy,moderate,hard and ultimate level where the questions will be updated in only ultimate level." url='' to="/QuizPhotos"/>   
      <ServiceComponent img={cranepf} title="Khan Crane" description="Khan Crane app is an business website made for my customer with the requirements asked by them , it consits of the info of the business their services and the feedback form." url='https://khancrane.netlify.app/'/>   
      <ServiceComponent img={news} title="YNews" description="YNews is news app which auto adds the recent news which appeared in any country,various sections are made like general,sports,business and many more to get those types of news only." url='' to="/NewsPhotos"/>   
      <ServiceComponent img={notes} title="YNotes" description="YNotes is an note saving app where a user can add a note with a title and description,the note can further be updated or deleted as per the user convenience." url='' to="/NotesPhotos"/>   
      <ServiceComponent img={password} title="Password Generator" description="Password Generator app is an app where one can generate a random password by adding the types like symbols,number and alphabets." url='https://sensational-selkie-288764.netlify.app'/>   
    </div>
    </>
    
  )
}

export default Services
