import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { motion, AnimatePresence } from "framer-motion";

const DropdownToggleBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const styles = {
    link: "w-full text-white py-4 block pl-2   ",
  };

  return (
    <div className="relative ">
      <motion.div whileTap={{ scale: 0.9 }} className="cursor-pointer" onClick={toggleMenu}>
        <IconContext.Provider value={{ size: "1.5em" }}>
          {isMenuOpen ? <FaTimes /> : <AiOutlineMenu />}
        </IconContext.Provider>
      </motion.div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10, clipPath: "circle(0% at 50% 0%)" }}
            animate={{ opacity: 1, scale: 1, y: 0, clipPath: "circle(100% at 50% 50%)" }}
            exit={{ opacity: 0, scale: 0.95, y: -10, clipPath: "circle(0% at 50% 0%)" }}
            transition={{ duration: 0.3 }}
            onBlur={toggleMenu}
            className="absolute z-[1010] top-0 right-0 mt-10 w-52 bg-glass px-4  rounded-lg shadow-md "
          >
            <ul className="z-[1009]">
              <li>
                <a href="#home" className={styles.link}>
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
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1OTRc9DvJpBaC06H2F6mrvTiWgd6OmHp_/view?usp=drive_link"
                  download
                  className={styles.link}
                >
                  Download CV
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownToggleBar;
