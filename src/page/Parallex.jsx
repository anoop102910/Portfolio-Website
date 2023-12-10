import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Parallax = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="parallax max-sm:hidden flex items-center  justify-center relative overflow-hidden h-[50vh] md:h-screen  mt-32" ref={ref}>
      <motion.h1 className="h1-primary " style={{ y: yText }}>
      Explore My Projects.
      </motion.h1>
      <motion.img
        src="mountains.webp"
        className="w-full  overflow-hidden object-cover object-center absolute z-10"
      ></motion.img>
      <motion.img src="/planets.png" className="absolute -top-32" style={{y:yBg}}></motion.img>
      <motion.img src="/stars.webp" className="stars absolute top-0 left-0"></motion.img>
    </div>
  );
};

export default Parallax;
