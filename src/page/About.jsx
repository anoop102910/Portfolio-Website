import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  backInLeftVariant,
  bottomInUpVariant,
  backInRightVariant,
  backInLeftVariants,
  imageVariant,
  backInBottomVariant,
} from "../utils/animation_variants";
const stackData = [
  {
    category: "Frontend",
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js"],
  },
  {
    category: "Database",
    items: ["MongoDB"],
  },
  {
    category: "CSS Framework",
    items: ["Tailwind CSS"],
  },
];

function About() {
  return (
    <section id="about" className="w-full mt-32 md:mt-64 relative ">
      <motion.h1
        variants={bottomInUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        id="about-heading"
        className="h1-primary text-center scroll-trigger-top"
      >
        About me
      </motion.h1>
      <motion.div
        variants={bottomInUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex mt-20 items-start sm:items-center flex-col sm:flex-row md:items-center gap-x-20"
      >
        <motion.img 
          id="about-image"
          className="w-[70%] mx-auto sm:w-[300px] md:w-[400px] rounded-lg  md:block h-auto scroll-trigger-left"
          src={"profile.jpg"}
          alt=""
        />
        <motion.div
          id="about-para"
          className="lg:ml-20 md:ml-10 mt-10 text-gray-300 scroll-trigger-right max-sm:text-center"
        >
          <p className="text-lg ">
            <span className="text-xl md:text-3xl text-pink-700 font-bold  ">Hello there!</span> I'm Anoop Singh, a passionate and aspiring web developer currently pursuing
            my B.Tech in Computer Science and Engineering at Bundelkhand Institute of Engineering
            and Technology in Jhansi , Uttar Pradesh.
          </p>
          <button className="btn-primary mt-10  ">
            <a href="#contact">Contact</a>{" "}
          </button>
        <img src="books.png" className="absolute max-sm:hidden bottom-0 opacity-10 -z-10" alt="" />

        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
