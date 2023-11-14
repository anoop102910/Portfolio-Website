import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const educationData = [
  {
    year: '2022-present',
    degree: 'B.Tech in Computer Science and Engineering',
    institution: 'Bundelkhand Institute of Engineering and Technology',
    location: 'Jhansi, Uttar Pradesh',
  },
  {
    year: '2020-2021',
    degree: 'Intermediate',
    institution: 'Radha Krishna Memorial Education Center',
    location: 'Kanpur, Uttar Pradesh',
  },
  {
    year: '2019-2020',
    degree: 'High School',
    institution: 'Radha Krishna Memorial Education Center',
    location: 'Kanpur, Uttar Pradesh',
  },
];
function Education() {
  const ref = useRef();
  const isInView = useInView(ref);
  const fromLeft = {
    initial: { opacity: 0, x: -400 },
    animate: { opacity: 1, x: 0 },
  };
  const fromRight = {
    initial: { opacity: 0, x: 400 },
    animate: { opacity: 1, x: 0 },
  };
  return (
    <div ref={ref} id="education" className="mt-32 ">
      <h1 className="h1-primary scroll-top  ">Education</h1>
      <div className="mt-20 md:flex justify-between gap-x-4 ">
      {educationData.map((item, index) => (
        <div key={index} className="mt-10 border p-8 rounded-md hover:bg-yellow-700">
          <h2 className="text-4xl font-bold font-roboto text-green-600">{item.year}</h2>
          <h3 className="text-2xl mt-6">{item.degree}</h3>
          <h4 className="mt-4 text-gray-400">{item.institution}</h4>
          <h5 className="mt-6 text-sm text-gray-400">{item.location}</h5>
        </div>
      ))}
      </div>
    </div>
  );
}

export default Education;
