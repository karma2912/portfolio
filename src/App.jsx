
import { useEffect, useRef,useState} from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import gsap from 'gsap'

function App() {
 const cursor = useRef(null)
 const [position, setPosition] = useState({ x: 0, y: 0 });

 const handleMouseMove = (event) => {
  setPosition({
    x: event.clientX,
    y: event.clientY,
  });
}

  useEffect(()=>{
   gsap.to(cursor.current,{
    x:position.x,
    y:position.y,
    ease: "back.out(1.7)",
   })
  },[position])
;
  return (
    <>
    <div ref={cursor}  className='h-4 w-4 bg-white rounded-full fixed Yash'></div>
    <div onMouseMove={handleMouseMove} className='min-h-screen w-full bg-black gradient-bg font-sans'>
      <Navbar/>
      <Home/>
    </div>
    </>
  )
}


export default App
