import Navbar from "./components.jsx/Navbar";
import Home from "./components.jsx/Home";
import About from "./components.jsx/About";
import Projects from "./components.jsx/Projects";
import Contact from "./components.jsx/Contact";
import Skills from "./components.jsx/Skills";
import Education from "./components.jsx/Education2";
import Footer from "./components.jsx/Footer";
import { useRef, useEffect } from "react";
import GsapAnimation from "./components.jsx/GsapAnimation";
import { motion } from "framer-motion";
import Parallax from "./components.jsx/Parallex";

export function App() {
  const App = useRef(null);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="pb-32 max-sm:p-4 overflow-y-hidden"
      >
        <Navbar />
        <div ref={App} className="px-1 lg:px-[10%]">
          <Home />
          <About />
          <Education />
        </div>
          <Parallax />
        <div ref={App} className="px-1 lg:px-[10%]">
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </motion.div>
    </>
  );
}
