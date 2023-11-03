import React, { useState ,useRef} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import gsap from "gsap";

const DropdownToggleBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    if (isOpen) {
      gsap.from(menuRef, {scale:0, opacity:1,duration: 0.3 });
    } else {
      gsap.from(menuRef,{scale:1,opacity:1,duration:0.3})
    }
  };

  const styles = {
    link: "w-full text-white py-4 block pl-2  ",
  };

  return (
    <div className="relative ">
      <div className="cursor-pointer"  onClick={toggleMenu}>
        <IconContext.Provider value={{ size: "1.5em" }}>{isMenuOpen ? <FaTimes /> : <AiOutlineMenu />}</IconContext.Provider>
      </div>

      {isMenuOpen && (
        <div ref={menuRef} onBlur={toggleMenu} className="absolute z-[1010] top-0 right-0 mt-10 w-52 bg-gray-800 px-4  rounded-lg shadow-md">
          <ul className="z-[1009]">
            <li>
              <a href="#home" className={styles.link} >
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={styles.link}>
                About
              </a>
            </li>
            <li>
              <a href="#projects" className={styles.link}>
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" className={styles.link}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" className={styles.link}>
                Contact
              </a>
            </li>
            <li>
              <a target="_blank" href="https://drive.google.com/file/d/1OTRc9DvJpBaC06H2F6mrvTiWgd6OmHp_/view?usp=drive_link" download className={styles.link}>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownToggleBar;
