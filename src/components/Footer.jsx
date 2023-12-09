import React from "react";
import { AiOutlineInstagram, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

function Footer() {
  return (
    <div className="mt-32 ">
      <div id="footer" className="flex items-center gap-x-10 mx-auto w-min">
        <a target="1" href="https://github.com/anoop102910?tab=repositories">
          <AiOutlineGithub  size={40} color="yellow" />
        </a>
        <a target="2" href="https://wa.me/6388175878">
          <BsWhatsapp size={36} color="green" />
        </a>
        <a target="3" href="https://instagram.com">
          <AiOutlineInstagram color="red" size={45} />
        </a>
        <a target="4" href="https://www.linkedin.com/in/anoop-singh-1a67ba252/">
          <AiFillLinkedin color="blue" size={45} />
        </a>
      </div>
      <div>
        <img src="lake.svg" className="w-full md:h-[250px] object-cover object-top" alt="" />
      </div>
    </div>
  );
}

export default Footer;
