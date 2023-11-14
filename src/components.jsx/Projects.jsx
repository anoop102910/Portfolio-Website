import React, { useRef } from "react";
import ProjectImage from "../assets/project.png";
import SidcupImageLink from "../assets/sidcup.png";
import Github from "../assets/Github";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import {motion, useAnimate, useAnimation, useScroll} from "framer-motion"

let cardDetails = [
  {
    name: "Socially",
    about: " Discover my MERN-based social media platform. Share posts, connect with friends, and enjoy real-time interactions.",
    imageLink: "/socially.png",
    gitLink: "https://github.com/anoop102910/Socially_MERN",
    reverse: false,
    websiteLink: "https://socially-fftw.onrender.com/",
  },
  
  {
    name: "Sidcup Clone Website",
    about:
      "Visit my website clone of Sidcup, showcasing captivating scrolling animations and the best available web animations.",
    imageLink: SidcupImageLink,
    gitLink: "https://github.com/anoop102910/Sidcup-website-clone",
    reverse: true,
    websiteLink: "https://responsive-sidcup-clone.netlify.app/",
  },
  {
    name: "Design to Code",
    about:
      "Witness the seamless fusion of creativity and functionality as Figma designs come to life in the realm of web development.",
    imageLink: 'beccas.png',
    gitLink: "https://github.com/anoop102910/Sidcup-website-clone",
    reverse: false,
    websiteLink: "https://responsive-website-102910.netlify.app/",
  },
];

function Projects() {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref,offset:[0,100]})

  const animation = useAnimation()
  return (
    <div id="projects" className="w-full mt-32 relative">
      <motion.h1 className="h1-primary top-0 left-0 z-[100] ">My Projects</motion.h1>
      <div>
        {cardDetails.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
}

function Card({ card }) {
  let { name, about, imageLink, gitLink, reverse, websiteLink } = card;
  return (
    <div className={`mt-32 md:mt-52 flex flex-col gap-y-10 md:flex-row items-center gap-x-16 ${reverse && "md:flex-row-reverse"}`}>
      <div className="md:w-[45%] relative card-image">
        <BsFillArrowUpRightCircleFill size={35} style={{ position: "absolute", bottom: "0", right: "0", backdropFilter: "blur(8px)", opacity: 0.8, zIndex: 10 }} />
        <a  target="_blank" href={websiteLink}>
          <img className="w-full h-[200px] md:h-[300px] object-cover object-center rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-900  transition duration-700 " src={imageLink} alt="" />
        </a>
      </div>
      <div className="card-content md:w-1/2">
        <h2 className="text-5xl font-bold">{name}</h2>
        <p className="mt-5 leading-8 text-gray-200">{about}</p>
        <div className="flex items-center mt-10 gap-x-5">
          <a target="_blank" href={websiteLink}>
            <button className="btn-primary"> Demo</button>
          </a>
          <a target="_blank" className="hover:scale-110 transition duration-500" href={gitLink}>
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}
export default Projects;
