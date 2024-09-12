import React from 'react'
import ServiceComponent from './ServiceComponent'
import quizpf from './quizpf.webp'
import news from './news.jpg'
import notes from './notes.jpg'
import password from './password.jpg'
import cranepf from './khanCraneLogo.webp'
import yd from './yashDevelops.jpg'

const Services = () => {
  return (
    <>
    <div className='min-h-screen w-full text-white'>
      <ServiceComponent img={quizpf} title="Quiz Quest" description="Quiz App is an app which auto updates the difficulty of questions,user can select easy,moderate,hard and ultimate level where the questions will be updated in only ultimate level." url='https://main--gentle-panda-ef79d1.netlify.app/'/>   
      <ServiceComponent img={news} title="YNews" description="YNews is news app which auto adds the recent news which appeared in any country,various sections are made like general,sports,business and many more to get those types of news only." url='https://66d428429b1d4600082e4108--gentle-panda-ef79d1.netlify.app/'/>   
      <ServiceComponent img={notes} title="YNotes" description="YNotes is an note saving app where a user can add a note with a title and description,the note can further be updated or deleted as per the user convenience." url='#'/>   
      <ServiceComponent img={password} title="Password Generator" description="Password Generator app is an app where one can generate a random password by adding the types like symbols,number and alphabets." url='https://66d428429b1d4600082e4108--gentle-panda-ef79d1.netlify.app/'/>   
      <ServiceComponent img={cranepf} title="Khan Crane" description="Khan Crane app is an business website made for my customer with the requirements asked by them , it consits of the info of the business their services and the feedback form." url='https://visionary-dragon-956949.netlify.app/'/>   
    </div>
    </>
    
  )
}

export default Services
