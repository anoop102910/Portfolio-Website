import React, { useEffect, useRef, useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { motion, useScroll, useTransform, useMotionValue } from "framer-motion";
import Chip from "../components/Chip";

let cardDetails = [
  {
    name: "Socially",
    about:
      " Discover my MERN-based social media platform. Share posts, connect with friends, and enjoy real-time interactions.",
    imageLink: "socially.webp",
    gitLink: "https://github.com/anoop102910/Socially_MERN",
    reverse: false,
    // websiteLink: "https://socially-fftw.onrender.com/",
    techStack: ["React.js", "MongoDB", "Express.js"],
    videoLink: "https://youtu.be/wpq2_1K5Y6U",
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
    name: "Yumyard",
    about:
      "Witness the seamless fusion of creativity and functionality as Figma designs come to life in the realm of web development.",
    imageLink: "yumyard-food.webp",
    gitLink: "https://github.com/anoop102910/yumyard-food-website",
    reverse: true,
    websiteLink: "https://yumyard-food.netlify.app/",
    techStack: ["Html", "Tailwind", "React", "Shadcn"],
  },
];

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
          <Card key={index} card={card} />
        ))}
      </div>
    </motion.div>
  );
}

function Card({ card }) {
  let { name, about, imageLink, gitLink, reverse, websiteLink, techStack, videoLink } = card;

  const [ishover, setHover] = useState(false);
  const [rect, setRect] = useState(null);
  const mouseRef = useRef();

  const cx = useMotionValue(0);
  const cy = useMotionValue(0);

  useEffect(() => {
    if (mouseRef.current) {
      setRect(mouseRef.current.getBoundingClientRect());
    }
  }, []);

  const handleMouseMove = e => {
    const scrollX = window.scrollX;
    const scrollY = window.scrollY;
    cx.set(e.clientX - rect.left + scrollX);
    cy.set(e.clientY - rect.top + scrollY);
    console.log(cx);
  };

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start center "],
  });
  const s = useTransform(scrollYProgress, [0, 1], [0, 1]);
  let x;
  if (reverse) x = useTransform(scrollYProgress, [0, 1], [200, 0]);
  else x = useTransform(scrollYProgress, [0, 1], [-200, 0]);

  return (
    <motion.div
      className={`mt-32 md:mb-52 mx-auto flex flex-col gap-y-10 md:flex-row items-center gap-x-16 max-md:max-w-lg ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <div
        className={`${
          !ishover && "hidden"
        } z-[100000] w-32 h-32 border border-white bg-black/20 rounded-full absolute top-0 left-0`}
        style={{
          top: `${cy + 12}px`,
          left: `${cx - 160}px`,
        }}
      ></div>
      <motion.div
        ref={ref}
        style={{ scale: s }}
        className="md:w-[45%] h-[200px] md:h-[260px] relative"
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
            ref={mouseRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="w-full  h-full object-cover object-center rounded-lg cursor-pointer hover:scale-[1.03] hover:shadow-lg hover:shadow-violet-900  transition duration-300 "
            src={imageLink}
            alt=""
          />
        </a>
      </motion.div>
      <motion.div style={{ x: x }} className="card-content md:w-1/2">
        <h2 className="text-5xl font-bold">{name}</h2>
        <p className="mt-5 leading-8 text-gray-200">{about}</p>
        <div className="mt-4">
          {techStack && techStack.map((tech, index) => <Chip key={index} value={tech} />)}
        </div>
        <div className="flex items-center mt-6 gap-x-5">
          {websiteLink && (
            <a target="_blank" href={websiteLink}>
              {/* <img src="website.svg" width={54} alt="" /> */}
              <button className="btn-primary">Demo</button>
            </a>
          )}
          <a target="_blank" className="hover:scale-110 transition duration-500" href={gitLink}>
            <img width={54} src="github.svg" alt="" />
          </a>
          {videoLink && (
            <a target="_blank" href="https://youtu.be/YOz10PSunp8">
              <img src="youtube.svg" width={54} alt="" />
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
export default Projects;
