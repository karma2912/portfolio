import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12 px-5 md:px-20 border-t border-gray-800">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
      <div className="mb-6 md:mb-0">
        <div className="text-2xl font-semibold">Yash Rajak</div>
        <div className="text-gray-500 mt-2">Web Developer & UI Enthusiast</div>
      </div>
      
      <div className="flex flex-col items-center md:items-end">
        <div className="flex gap-6 mb-6">
          <a href="https://github.com/karma2912" target="_blank" rel="noopener noreferrer" 
             className="text-xl hover:text-purple-400 transition-colors">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://x.com/YashRaj45608052" target="_blank" rel="noopener noreferrer" 
             className="text-xl hover:text-purple-400 transition-colors">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/yash-rajak" target="_blank" rel="noopener noreferrer" 
             className="text-xl hover:text-purple-400 transition-colors">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
        
        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} All Rights Reserved
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
