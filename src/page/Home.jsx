import { motion } from "framer-motion";
import { imageVariant, slideVariants } from "../utils/animation_variants";
import Lottie from "lottie-react";
import animationData from "../assets/hero.json";
function Home() {
  return (
    <section
      id="home"
      className="flex flex-1 flex-col sm:flex-row  md:mt-10 justify-between relative"
    >
      <motion.div>
        <motion.h1
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -1000 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="mt-20 text-2xl  md:text-3xl overflow-hidden   text-gray-400 uppercase whitespace-nowrap break-words font-playfair font-bold tracking-wider"
        >
          I am a <span className="text-green-500 ">web developer</span>
        </motion.h1>
        <motion.h2
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -1000 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeInOut" }}
          className="h1-primary animate-bottom"
        >
          Anoop Singh
        </motion.h2>
        <motion.div
          animate={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -1000 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeInOut" }}
          className="mt-16 flex items-center z-20 gap-x-4 animate-bottom"
        >
          <hr className="w-[0.1rem] h-[100px] border bg3 border-red-500" />
          <h3 className="w-[200px] text-gray-300 font-salsa">
            "I am passionate about web development and dedicated to honing my skills in this field."
          </h3>
        </motion.div>
      </motion.div>
      <motion.div className="md:absolute  top-1 -right-32  -z-10  ">
        <motion.div
          variants={imageVariant}
          initial="hidden"
          animate="visible"
          className="w-full  md:w-[40rem]"
        >
          <Lottie animationData={animationData} />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Home;
