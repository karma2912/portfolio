import { useEffect, useRef, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import QuizPhotos from "./components/Services/Quiz/QuizPhotos";
import NewsPhotos from "./components/Services/news/NewsPhotos";
import NotesPhotos from "./components/Services/notes/NotesPhotos";
import Loader from "./components/Loader/Loader";
import NewNavbar from "./components/NewNavbar";
import Footer from "./components/Footer/Footer";

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
  
  }, []);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
            <div className="h-screen w-full bg-black text-white gradient-bg flex justify-center items-center overflow-y-hidden" onMouseMove={handleMouseMove} >
              <Loader/>
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
                <NewNavbar text="text-white"/>
                <Services/>
                <Footer/>
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
                <NewNavbar text="text-black"/>
                <About/>
                <Footer/>
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
                <NewNavbar text="text-white"/>
                <Contact/>
                <Footer/>
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
                <NewNavbar text="text-white"/>
                <Resume/>
                <Footer/>
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
                <Footer/>
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
                <Footer/>
              </div>
            </>
          }
        />
        <Route
          path="/NotesPhotos"
          element={
            <>
              <div
                onMouseMove={handleMouseMove}
                className="min-h-screen w-full bg-black gradient-bg text-white border-white"
              >
                <NotesPhotos/>
                <Footer/>
              </div>
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
