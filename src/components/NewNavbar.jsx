import React from 'react'

const NewNavbar = () => {
  return (
    <div className='w-full h-24 bg-transparent pt-4 flex md:justify-evenly justify-around items-center z-40 top-0 sticky'>
        <div className='w-full h-full flex justify-between items-end'>
         <div className='text-5xl pl-16'>
            Y.
         </div>
         <div className='pr-20'>
         <i className="fa-solid fa-bars text-3xl "></i>
         </div>
        </div>
    </div>
  )
}

export default NewNavbar
