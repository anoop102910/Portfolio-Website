import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./page/Home";
import About from "./page/About";
import Projects from "./page/Projects";
import Contact from "./page/Contact";
import Skills from "./page/Skills";
import Education from "./page/Education";
import { motion } from "framer-motion";
import Parallax from "./page/Parallex";
// import { SparklesPreview } from "./components/SparklesPreview";

export default function Layout() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="max-sm:p-4 overflow-y-hidden"
      >
        <div className="sm:px-10 lg:px-[10%]">
          <Navbar />
            <Home />
          <About />
          <Education />
        </div>
        <Parallax />
        <div className="sm:px-10 lg:px-[10%]">
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </motion.div>
    </>
  );
}
