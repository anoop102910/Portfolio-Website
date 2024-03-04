import { motion } from "framer-motion";
import { educationData } from "../utils/data";

function Education() {

  const variant = i => ({
    hidden: { opacity: 0, x: 200 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: i * 0.2 + 0.2 } },
  });

  return (
    <div id="education" className="mt-32 relative">
      <motion.h1
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="h1-primary max-md:text-center"
      >
        Education
      </motion.h1>
      <motion.div
        className="mt-20 md:flex flex-1 justify-between gap-x-4 max-md:max-w-lg max-md:mx-auto"
      >
        {educationData.map((item, index) => (
          <motion.div
            variants={variant(index)}
            whileInView={"visible"}
            viewport={{once:true}}
            initial="hidden"
            key={index}
            className="mt-10 flex-1 border p-8 rounded-md hover:bg-violet-900 bg-glass hover:ring-2 hover:ring-white "
          >
            <h2 className="text-4xl font-bold font-roboto text-green-600">{item.year}</h2>
            <h3 className="text-2xl mt-6">{item.degree}</h3>
            <h4 className="mt-4 text-gray-400">{item.institution}</h4>
            <h5 className="mt-6 text-sm text-gray-400">{item.location}</h5>
          </motion.div>
        ))}
      </motion.div>
      <img src="fire1.png" className="absolute opacity-50 -right-32 -bottom-32 -z-10" alt="" />
    </div>
  );
}

export default Education;
