import React, { useEffect, useRef, useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Chip from "../components/ui/chip";
import { cardDetails } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  return (
    <motion.div id="projects" className="w-full relative mt-32  ">
      <img
        src="laptop.png"
        width={400}
        className="absolute max-sm:hidden opacity-5 -left-20 -top-20"
        alt=""
      />
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h1-primary md:mb-52 max-md:text-center"
      >
        My Projects
      </motion.h1>
      <div>
        {cardDetails.map((card, index) => (
          <ProjectCard key={index} card={card} />
        ))}
      </div>
    </motion.div>
  );
}

export default Projects;
