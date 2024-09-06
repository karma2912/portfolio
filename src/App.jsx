import { useEffect, useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";

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
                className="min-h-screen w-full bg-black gradient-bg "
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
                className="min-h-screen w-full bg-black gradient-bg "
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
                className="min-h-screen w-full bg-black gradient-bg "
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
                className="min-h-screen w-full bg-black gradient-bg "
              >
                <Navbar />
                <Contact/>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
