import Lottie from "lottie-react";
import React from "react";
import animationData from "../assets/loader.json";

function Loader() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Lottie className="w-32" animationData={animationData} />
    </div>
  );
}

export default Loader;
