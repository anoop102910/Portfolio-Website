import React, { useRef } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import Chip from "../components/Chip";
import {
  backInBottomVariant,
  backInLeftVariant,
  backInRightVariant,
} from "../utils/animation_variants";

let cardDetails = [
  {
    name: "Socially",
    about:
      " Discover my MERN-based social media platform. Share posts, connect with friends, and enjoy real-time interactions.",
    imageLink: "socially.webp",
    gitLink: "https://github.com/anoop102910/Socially_MERN",
    reverse: false,
    websiteLink: "https://socially-fftw.onrender.com/",
    techStack: ["React.js", "MongoDB", "Express.js"],
  },
  {
    name: "AnimeHub",
    about: "Discover anime joy on my Next.js site with infinite loading and server-side rendering",
    imageLink: "animehub.webp",
    gitLink: "https://github.com/anoop102910/AnimeHub",
    reverse: true,
    websiteLink: "https://animehub-102910.vercel.app/",
    techStack: ["Next js", "React Intersection", "Framer Motion"],
  },

  {
    name: "Sidcup Clone Website",
    about:
      "Visit my website clone of Sidcup, showcasing captivating scrolling animations and the best available web animations.",
    imageLink: "sidcup.webp",
    gitLink: "https://github.com/anoop102910/Sidcup-website-clone",
    reverse: false,
    websiteLink: "https://responsive-sidcup-clone.netlify.app/",
    techStack: ["Html", "Css", "GSAP"],
  },
  {
    name: "Design to Code",
    about:
      "Witness the seamless fusion of creativity and functionality as Figma designs come to life in the realm of web development.",
    imageLink: "beccas.webp",
    gitLink: "https://github.com/anoop102910/Sidcup-website-clone",
    reverse: true,
    websiteLink: "https://responsive-website-102910.netlify.app/",
    techStack: ["Html", "Css", "React.js"],
  },
];

function Projects() {
  const ref = useRef();
  return (
    <motion.div id="projects" className="w-full relative mt-32">
      <motion.h1
        variants={backInBottomVariant}
        whileInView="visible"
        initial="hidden"
        className="h1-primary md:mb-52"
      >
        My Projects
      </motion.h1>
      <div>
        {cardDetails.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </motion.div>
  );
}

function Card({ card }) {
  let { name, about, imageLink, gitLink, reverse, websiteLink, techStack } = card;
  return (
    <div
      className={`mt-32 md:mb-52 flex flex-col gap-y-10 md:flex-row items-center gap-x-16 ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <motion.div
        // variants={backInLeftVariant}
        initial="hidden"
        whileInView="visible"
        className="md:w-[45%] relative card-image"
      >
        <BsFillArrowUpRightCircleFill
          size={35}
          style={{
            position: "absolute",
            bottom: "0",
            right: "0",
            backdropFilter: "blur(8px)",
            opacity: 0.8,
            zIndex: 10,
          }}
        />
        <a target="_blank" href={websiteLink}>
          <img
            className="w-full h-[200px] md:h-[300px] object-cover object-center rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-900  transition duration-700 "
            src={imageLink}
            alt=""
          />
        </a>
      </motion.div>
      <motion.div
        // variants={backInRightVariant}
        initial="hidden"
        whileInView={"visible"}
        className="card-content md:w-1/2"
      >
        <h2 className="text-5xl font-bold">{name}</h2>
        <p className="mt-5 leading-8 text-gray-200">{about}</p>
        <div className="mt-4">
          {techStack && techStack.map((tech, index) => <Chip key={index} value={tech} />)}
        </div>
        <div className="flex items-center mt-6 gap-x-5">
          <a target="_blank" href={websiteLink}>
            <button className="btn-primary"> Demo</button>
          </a>
          <a target="_blank" className="hover:scale-110 transition duration-500" href={gitLink}>
            <img width={54} src="github.svg" alt="" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
export default Projects;
