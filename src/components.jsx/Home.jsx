import React, { useEffect, useRef } from "react";
import ProfileImage from "../assets/profilee.png";
import { motion } from "framer-motion";

function Home() {
  const app = useRef();

  const slideVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <section
      ref={app}
      id="home"
      className="flex flex-1 flex-col md:flex-row  md:mt-10 justify-between relative"
    >
      {/* <motion.h1
        initial={{ x: 0 }}
        animate={{ x: "-60%" }}
        transition={{ duration: 60 ,repeat:"Infinity",repeatType:"mirror"}}
        className="text-[15rem] font-cahuenga font-bold absolute text-slate-500/25 -bottom-40 left-0 whitespace-nowrap -z-[30000]"
      >
        Coding is passion for me. For me the coding is something that makes my mind free from all
        kinds of troubles
      </motion.h1> */}
      <motion.div
        transition={{ duration: 1.8, staggerChildren: 0.6 }}
        variants={slideVariants}
        animate="visible"
        initial="hidden"
      >
        <motion.h1
          variants={slideVariants}
          id="h1"
          onClick
          className="mt-20 text-2xl md:text-3xl text-gray-400 uppercase animate-bottom font-cahuenga"
        >
          I am a <span className="text-green-500 ">web developer</span>
        </motion.h1>
        <motion.h2 variants={slideVariants} className="h1-primary animate-bottom">
          Anoop Singh
        </motion.h2>
        <motion.div
          variants={slideVariants}
          className="mt-16 flex items-center z-20 gap-x-4 animate-bottom"
        >
          <hr className="w-[0.1rem] h-[100px] border bg3 border-red-500" />
          <h3 className="w-[200px] text-gray-300 ">
            "I am passionate about web development and dedicated to honing my skills in this field."
          </h3>
        </motion.div>
      </motion.div>
      <motion.div className="md:absolute top-0  -z-10 relative  right-[4px]">
        <motion.div className="animate  md:block w-[calc(110%)]  h-48 top-64 -left-6 md:w-[550px] md:h-[360px] md:top-[160px] md:left-[-60px] rounded-full absolute -z-10 bg-r3  rounded-b-none"></motion.div>
        <motion.div className="animate hidde w-[calc(110%)]  h-48 top-60 -left-4  md:block md:w-[550px] md:h-[360px] md:top-[130px] md:left-[-20px] rounded-full absolute -z-10 border-2 border-dashed  border-x-lime-800  rounded-b-none"></motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 10 }}
          className="animate  top-0 left-0 "
          src={ProfileImage}
          alt=""
        />
      </motion.div>
    </section>
  );
}

export default Home;
