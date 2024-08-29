import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Socials() {
  return (
    <div
      id="Home"
      className="absolute 2xl:left-1/4 bottom-1/2 2xl:bottom-1/3 w-64 2xl:w-fit bg-transparent/10 backdrop-blur-2xl p-1 rounded-full 2xl:h-60 flex justify-around items-center"
    >
      <section className="flex 2xl:flex-col 2xl:justify-evenly">
        <a
          href="https://www.linkedin.com/in/olt-ko%C3%A7mezi-3381a8249/"
          className="cursor-pointer hover:bg-black p-2 px-6 2xl:px-3 2xl:py-4 rounded-full duration-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="/"
          className="cursor-pointer hover:bg-black p-2 px-6 2xl:px-3 2xl:py-4 rounded-full duration-500"
        >
          <FaGithub />
        </a>
        <a
          href="/"
          className="cursor-pointer hover:bg-black p-2 px-6 2xl:px-3 2xl:py-4 rounded-full duration-500"
        >
          <FaInstagram />
        </a>
      </section>
    </div>
  );
}

export default Socials;
