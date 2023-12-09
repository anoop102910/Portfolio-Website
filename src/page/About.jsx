import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { backInLeftVariant,bottomInUpVariant ,backInRightVariant, backInLeftVariants, imageVariant} from "../utils/animation_variants";
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
    <section id="about" className="md:about w-full mt-32 md:mt-64 relative ">
      <motion.h1
        variants={bottomInUpVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{once:true,margin: "-30px 0px 0px 0px" }}
        id="about-heading"
        className="h1-primary text-center scroll-trigger-top"
      >
        About me
      </motion.h1>
      <div className="flex mt-5 md:mt-20 items-start flex-col md:flex-row md:items-center gap-x-20">
        <motion.img
          // variants={backInLeftVariants}
          initial="hidden"
          whileInView="visible"
          // viewport={{amount:0.1}}
          id="about-image"
          className="w-[70%] mx-auto md:w-[400px]  md:block h-auto scroll-trigger-left"
          src={"profile.png"}
          alt=""
        />
        <motion.div
          // variants={backInRightVariant}
          initial="hidden"
          whileInView={"visible"}
          id="about-para"
          className="lg:ml-20 md:ml-10 mt-10 text-gray-300 scroll-trigger-right"
        >
          <p>
            Hello there!{" "}
            <span>
              <img className="w-12  inline" src="hi.png" alt="" />
            </span>{" "}
            I'm Anoop Singh, a passionate and aspiring web developer{" "}
            <span>
              <img className="w-12  inline" src="comp-emoji.png" alt="" />
            </span>{" "}
            currently pursuing my B.Tech in Computer Science and Engineering at Bundelkhand
            Institute of Engineering and Technology in Jhansi
            <span>
              <img className="w-12 ml-2  inline" src="college.png" alt="" />
            </span>{" "}
            , Uttar Pradesh.
          </p>
          <button className="btn-primary mt-10">
            <a href="#contact">Contact</a>{" "}
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
