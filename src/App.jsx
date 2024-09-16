import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import QuizPhotos from "./components/Services/Quiz/QuizPhotos";
import NewsPhotos from "./components/Services/news/NewsPhotos";

function App() {
  const cursor = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY,
    });
  };

  useEffect(() => {
    gsap.to(cursor.current, {
      x: position.x,
      y: position.y,
      ease: "back.out(1.7)",
    });
  }, [position]);
  return (
    <>
      <div
        ref={cursor}
        className="h-4 w-4 bg-white rounded-full fixed Yash"
      ></div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black text-white border-white gradient-bg "
              >
                <Navbar />
                <Home/>
              </div>
            </>
          }
        />
        <Route
          path="/services"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black gradient-bg text-white border-white"
              >
                <Navbar />
                <Services/>
              </div>
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black gradient-bg text-black border-black"
              >
                <Navbar />
                <About/>
              </div>
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black gradient-bg text-white border-white"
              >
                <Navbar />
                <Contact/>
              </div>
            </>
          }
        />
        <Route
          path="/resume"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black gradient-bg text-white border-white"
              >
                <Navbar />
                <Resume/>
              </div>
            </>
          }
        />
        <Route
          path="/QuizPhotos"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black gradient-bg text-white border-white"
              >
                <QuizPhotos/>
                
              </div>
            </>
          }
        />
        <Route
          path="/NewsPhotos"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black gradient-bg text-white border-white"
              >
                <NewsPhotos/>
                
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
