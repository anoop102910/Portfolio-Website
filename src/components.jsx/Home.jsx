import React, { useEffect, useRef } from "react";
import ProfileImage from "../assets/profilee.png"


function Home() {
  const app = useRef();

  return (
    <section ref={app} id="home" className="flex flex-1 flex-col md:flex-row  md:mt-10 justify-between relative">
      <div className=" ">
        <h1 id="h1" onClick className="mt-20 text-2xl md:text-3xl text-gray-400 uppercase animate-bottom ">
          I am a <span className="text-green-500 ">web developer</span>
        </h1>
        <h1 className="h1-primary animate-bottom">Anoop Singh</h1>
        <div className="mt-16 flex items-center gap-x-4 animate-bottom">
          <hr className="w-[0.1rem] h-[100px] border bg3 border-red-500" />
          <h3 className="w-[200px] text-gray-300 ">"I am passionate about web development and dedicated to honing my skills in this field."</h3>
        </div>
      </div>
      <div className="md:absolute top-0  -z-10 relative  right-[4px]">
        <div className="animate  md:block w-[calc(110%)]  h-48 top-64 -left-6 md:w-[550px] md:h-[360px] md:top-[160px] md:left-[-60px] rounded-full absolute -z-10 bg-r3  rounded-b-none"></div>
        <div className="animate hidde w-[calc(110%)]  h-48 top-60 -left-4  md:block md:w-[550px] md:h-[360px] md:top-[130px] md:left-[-20px] rounded-full absolute -z-10 border-2 border-dashed  border-x-lime-800  rounded-b-none"></div>
        <img className="animate  top-0 left-0 " src={ProfileImage} alt="" />
      </div>
    </section>
  );
}

export default Home;
