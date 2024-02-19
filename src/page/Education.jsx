import { motion } from "framer-motion";
import { bottomInUpVariant } from "../utils/animation_variants";

const educationData = [
  {
    year: "2022-present",
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Bundelkhand Institute of Engineering and Technology",
    location: "Jhansi, Uttar Pradesh",
  },
  {
    year: "2020-2021",
    degree: "Intermediate",
    institution: "Radha Krishna Memorial Education Center",
    location: "Kanpur, Uttar Pradesh",
  },
  {
    year: "2019-2020",
    degree: "High School",
    institution: "Radha Krishna Memorial Education Center",
    location: "Kanpur, Uttar Pradesh",
  },
];

function Education() {
  return (
    <div id="education" className="mt-32 relative">
      <motion.h1 className="h1-primary max-md:text-center">Education</motion.h1>
      <motion.div className="mt-20 md:flex flex-1 justify-between gap-x-4 max-md:max-w-lg max-md:mx-auto">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="mt-10 flex-1 border p-8 rounded-md hover:bg-violet-900 bg-glass"
          >
            <h2 className="text-4xl font-bold font-roboto text-green-600">{item.year}</h2>
            <h3 className="text-2xl mt-6">{item.degree}</h3>
            <h4 className="mt-4 text-gray-400">{item.institution}</h4>
            <h5 className="mt-6 text-sm text-gray-400">{item.location}</h5>
          </motion.div>
        ))}
      </motion.div>
      <img src="fire1.png"  className="absolute opacity-50 -right-32 -bottom-32 -z-10" alt="" />

    </div>
  );
}

export default Education;
