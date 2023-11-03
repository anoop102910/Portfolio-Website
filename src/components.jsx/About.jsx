import React from "react";
import ProfileImage from "../assets/profilee.png"
function About() {
  return (
    <section id="about" className="md:about w-full mt-32 md:mt-64 relative ">
      <h1 id="about-heading" className="h1-primary text-center scroll-trigger-top">About me</h1>
      <div className="flex mt-5 md:mt-20 items-start flex-col md:flex-row">
        <img id="about-image" className="w-[450px] hidden md:block h-auto scroll-trigger-left" src={ProfileImage} alt="" />
        <div id="about-para" className="lg:ml-20 md:ml-10 mt-10 text-gray-300 scroll-trigger-right">
          <p className="">I'm a Computer Science and Engineering student in Jhansi with a passion for web development. I'm well-versed in C++ for data structures and algorithms.</p>
          <p className="mt-4">
            In web development, I use HTML, CSS, JavaScript, ReactJS, Node.js, Express.js, and MongoDB. I'm all about efficiency, using Tailwind CSS for styling. I'm on a quest for web development
            internships to gain valuable experience.
          </p>
          <h3 className="mt-4 text-xl font-bold">
            Name : <span className="text-base text-gray-400">Anoop Singh</span>
          </h3>
          <h3 className="mt-4 text-xl font-bold">
            Date of Birth : <span className="text-base text-gray-400">04 August 2004</span>
          </h3>
          <h3 className="mt-4 text-xl font-bold">
            Address : <span className="text-base text-gray-400">Kanpur, Uttar Pradesh</span>
          </h3>
          <h3 className="mt-4 text-xl font-bold">
            Email : <span className="text-base text-gray-400">anoopsingh1729@gmail.com</span>
          </h3>
          <h3 className="mt-4 text-xl font-bold">
            Phone : <span className="text-base text-gray-400">6388175878</span>
          </h3>
          <button className="btn-primary mt-10">Contact </button>
        </div>
      </div>
    </section>
  );
}

export default About;
