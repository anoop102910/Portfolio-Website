import React from "react";
import DropdownToggleBar from "./DropdownToggleBar";

function Navbar() {
  return (
    <header className="w-full md:px-12 h-[3.7rem] flex items-center rounded-full mt-3 animate-opacity z-[3000]">
      <div className="flex justify-between items-center w-full ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4">
            <h1 className="text-2xl font-extrabold font-roboto">
              <span className="lg:text-3xl text-purple-400">A</span>noop Singh
            </h1>
          </div>
          <nav className="ml-20 hidden md:block">
            <ul className="flex gap-x-16 items-center">
              <li className="relative ">
                <a className="link-liner" href="#home ">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="md:hidden">
            <DropdownToggleBar />
          </div>
          <a className="relative  btn-primary hidden md:block" target="_blank" href="https://drive.google.com/file/d/1OTRc9DvJpBaC06H2F6mrvTiWgd6OmHp_/view?usp=drive_link" download>
            <button >Download CV</button>

          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
