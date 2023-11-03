import React from "react";
import CssImage from "../assets/css.png";
import HtmlLogo from "../assets/htmls.png";
import JsIcon from "../assets/js.png";
import ReactIcon from "../assets/react.png";
import MongoIcon from "../assets/mongo.png";
import NodeIcon from "../assets/node.png";

function Skills() {
  let imageSrcs = [ReactIcon, MongoIcon, NodeIcon, HtmlLogo, CssImage, JsIcon];
  return (
    <div id="skills" className="mt-32 text-center">
      <h1 className="h1-primary"> My skills</h1>
      <div id="card-container" className="mt-20 grid grid-cols-3 gap-20">
        <Card src={"https://img.icons8.com/plasticine/100/react.png"} label={"React"} />
        <Card src={imageSrcs[1]} label={"Node Js"} />
        <Card src={imageSrcs[2]} label={"Mongo Db"} />
        <Card size={"120"} src={imageSrcs[3]} label={"Html"} />
        <Card size={"90"} src={imageSrcs[4]} label={"CSS"} />
        <Card src={imageSrcs[5]} label={"Javascript"} />
      </div>
    </div>
  );
}

function Card({ src, label, size = 100 }) {
  return (
    <div className="skills-card hover:ring-green-400 hover:scale-[1.01] hover:ring-4 mx-auto md:p-10  rounded-md md:bg-blue-900  md:hover:bg-blue-800 md:w-[250px] flex flex-col items-center justify-between transition shadow-md md:active:bg-blue-600 duration-500 p-0 w-max bg-transparent">
      <img className="max-[600px]:w-12 " width={size} height="auto" src={src} alt="node js " />
      <h2 className="md:text-xl font-bold  mt-4 text-green-300 text-sm">{label}</h2>
    </div>
  );
}

export default Skills;
