import {motion} from "framer-motion"
import { backInBottomVariant } from "../utils/animation_variants";

function Skills() {
  return (
    <div id="skills" className="mt-32 text-center">
      <h1 className="h1-primary"> My skills</h1>
      <motion.div variants={backInBottomVariant} initial="hidden" animate="visible"  id="card-container" className="mt-20 grid grid-cols-3 gap-20">
        <Card src="react.svg" label={"React"} />
        <Card src="node.svg" label={"Node Js"} />
        <Card src="mongo.svg" label={"Mongo Db"} />
        <Card size={"120"} src="htmls.png" label={"Html"} />
        <Card size={"90"} src="css.png" label={"CSS"} />
        <Card src="js.png" label={"Javascript"} />
      </motion.div>
    </div>
  );
}

function Card({ src, label, size = 100 }) {
  return (
    <motion.div variants={backInBottomVariant} className="skills-card hover:ring-green-400 hover:scale-[1.01] hover:ring-4 mx-auto md:p-10  rounded-md md:bg-blue-900  md:hover:bg-blue-800 md:w-[250px] flex flex-col items-center justify-between transition shadow-md md:active:bg-blue-600 duration-500 p-0 w-max bg-transparent">
      <img className="max-[600px]:w-12 " width={size} height="auto" src={src} alt="node js " />
      <h2 className="md:text-xl font-bold  mt-4 text-green-300 text-sm">{label}</h2>
    </motion.div>
  );
}

export default Skills;
