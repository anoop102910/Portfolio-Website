import React from "react";

function Footer() {
  return (
    <div className="mt-32 ">
      <div id="footer" className="flex items-center gap-x-10 mx-auto w-min max-sm:w-full">
        <a target="1" className="w-20" href="https://github.com/anoop102910?tab=repositories">
          <img  src="github.png" alt="" />
        </a>
        <a target="2" className="w-20" href="">
          <img src="./instagram.png" alt="" />
        </a>
        <a target="3" className="w-20" href="https://www.linkedin.com/in/anoop-singh-1a67ba252/">
          <img src="./linkedin.png" alt="" />
        </a>
        <a target="4" className="w-20" href="https://wa.me/6388175878">
          <img src="whatsapp.png" alt="" />
        </a>
      </div>
      <div>
        <img src="lake.svg" className="w-full md:h-[250px] object-cover object-top" alt="" />
      </div>
    </div>
  );
}

export default Footer;
