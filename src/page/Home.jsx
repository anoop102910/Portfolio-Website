import { motion } from "framer-motion";
import { imageVariant, slideVariants } from "../utils/animation_variants";
function Home() {

  return (
    <section
      id="home"
      className="flex flex-1 flex-col md:flex-row  md:mt-10 justify-between relative"
    >
      <motion.div
        transition={{ duration: 2.1, staggerChildren: 0.7, ease: "easeInOut" }}
        variants={slideVariants}
        animate="visible"
        initial="hidden"
      >
        <motion.h1
          variants={slideVariants}
          className="mt-20 text-2xl  md:text-3xl overflow-hidden   text-gray-400 uppercase whitespace-nowrap break-words font-playfair font-bold tracking-wider"
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
        <motion.img
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="top-0 left-0 animate-float"
          src="profile_anime.svg"
          alt=""
        />
      </motion.div>
    </section>
  );
}

export default Home;
