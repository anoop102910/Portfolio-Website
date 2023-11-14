import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Education() {
  const ref = useRef();
  const isInView = useInView(ref);
  const fromLeft = {
    initial: { opacity: 0, x: -400 },
    animate: { opacity: 1, x: 0 },
  };
  const fromRight = {
    initial: { opacity: 0, x: 400 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div ref={ref} id="education" className="mt-32 ">
      <h1 className="h1-primary scroll-top ">Education</h1>
      <div className="mt-20  ">
        <motion.div
          variants={fromRight}
          animate={isInView && "animate"}
          initial="hidden"
          transition={{ duration: 1 }}
          className="edu-card-1  flex items-center gap-x-6 md:gap-x-20 md:ml-[45%] "
        >
          <div className="flex flex-col max-sm:hidden items-center gap-y-3 ">
            <div id="circle" className="circle"></div>
            <hr className="w-[2px] h-64 bg-white" />
          </div>
          <div className="mt-10 border p-8 rounded-md">
            <h2 className="text-4xl font-bold font-roboto text-green-600">2022-present</h2>
            <h3 className="text-2xl mt-6">B.Tech in Compter Science and Engineering</h3>
            <h4 className=" mt-4 text-gray-400">
              Bundelkhand Institute of Engineering and Technology
            </h4>
            <h5 className="mt-6 text-sm text-gray-400">Jhansi, Uttar Pradesh</h5>
          </div>
        </motion.div>
        <motion.div
          variants={fromLeft}
          animate={isInView && "animate"}
          transition={{ duration: 1 }}
          className="edu-card-2  flex gap-x-2 md:gap-x-20 mt-10 ml-[3%]"
        >
          <div className="mt-10 border p-8 rounded-md">
            <h2 className="text-4xl font-bold font-roboto text-green-600">2020-2021</h2>
            <h3 className="text-2xl mt-6">Intermediate</h3>
            <h4 className=" mt-4 text-gray-400">Radha Krishna Memorial Education Center</h4>
            <h5 className="mt-6 text-sm text-gray-400">Kanpur, Uttar Pradesh</h5>
          </div>
          <div className="flex flex-col max-sm:hidden items-center gap-y-4 ">
            <div id="circle" className="circle"></div>
            <hr className="w-[2px] h-64 bg-white" />
          </div>
        </motion.div>
        <motion.div
          variants={fromRight}
          animate={isInView && "animate"}
          transition={{ duration: 1 }}
          className="edu-card-3  flex gap-x-6 md:gap-x-20 mt-10 md:ml-[45%]"
        >
          <div className="flex flex-col max-sm:hidden items-center gap-y-4 ">
            <div id="circle" className="circle"></div>
            <hr className="w-[2px] h-64 bg-white" />
          </div>
          <div className="mt-10 border p-8 rounded-md">
            <h2 className="text-4xl font-bold font-roboto text-green-600">2019-2020</h2>
            <h3 className="text-2xl mt-6">High School</h3>
            <h4 className=" mt-4 text-gray-400">Radha Krishna Memorial Education Center</h4>
            <h5 className="mt-6 text-sm text-gray-400">Kanpur, Uttar Pradesh</h5>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Education;
