import Navbar from "./components.jsx/Navbar";
import Home from "./components.jsx/Home";
import About from "./components.jsx/About";
import Projects from "./components.jsx/Projects";
import Contact from "./components.jsx/Contact";
import Skills from "./components.jsx/Skills";
import Education from "./components.jsx/Education";
import Footer from "./components.jsx/Footer";
import locomotiveScroll from "locomotive-scroll";
import { useRef, useEffect } from "react";
import GsapAnimation from "./components.jsx/GsapAnimation";

export function App() {
  const App = useRef(null);

  // useEffect(() => {
  //   const scroll = new locomotiveScroll({
  //     el: App.current,
  //     smooth: true,
  //   });

  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <>
      <GsapAnimation>
        <div  className="pb-32">
          <Navbar />
          <div ref={App} className="px-1 lg:px-[10%]">
            <Home />
            <About />
            <Education />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </GsapAnimation>
    </>
  );
}
