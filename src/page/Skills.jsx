import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Skills() {

  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "start center "],
  });
  const s = useTransform(scrollYProgress, [0, 1], [1,0.3]);

  return (
    <div id="skills" className="mt-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        
        viewport={{once:true}}
        className="h1-primary"
      >
        {" "}
        My skills
      </motion.div>
      <motion.div ref={ref} id="card-container" className="mt-20 grid grid-cols-3 gap-20">
        <Card s={s} src="react.svg" label={"React"} />
        <Card s={s} src="node.svg" label={"Node Js"} />
        <Card s={s} src="mongo.svg" label={"Mongo Db"} />
        <Card s={s} src="html.svg" label={"Html"} />
        <Card s={s} src="css.svg" label={"CSS"} />
        <Card s={s} src="js.svg" label={"Javascript"} />
      </motion.div>
    </div>
  );
}

function Card({ src, label,s, size = 100 }) {

  return (
    <motion.div
      style={{ scale: s}}
      className="skills-card hover:ring-green-400 hover:scale-[1.01] hover:ring-4 mx-auto md:p-10  rounded-md md:bg-blue-900  md:hover:bg-blue-800 md:w-[250px] flex flex-col items-center justify-between transition shadow-md md:active:bg-blue-600 duration-500 p-0 w-max bg-transparent"
    >
      <img className="max-[600px]:w-12 " width={size} height="auto" src={src} alt="node js " />
      <h2 className="md:text-xl font-bold  mt-4 text-green-300 text-sm">{label}</h2>
    </motion.div>
  );
}

export default Skills;
