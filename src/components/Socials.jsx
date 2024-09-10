import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Socials() {
  return (
    <div
      id="Home"
      className="absolute 2xl:left-1/4 bottom-1/2 2xl:bottom-1/3 w-64 2xl:w-fit bg-transparent/10 backdrop-blur-2xl p-1 rounded-full 2xl:h-64 flex justify-around items-center"
    >
      <section className="flex 2xl:flex-col 2xl:justify-evenly">
        <a
          href="https://www.linkedin.com/in/olt-ko%C3%A7mezi-3381a8249/"
          className="cursor-pointer text-2xl hover:bg-black p-2 px-6 2xl:px-3 2xl:py-4 rounded-full duration-500"
        >
          <FaLinkedin />
        </a>
        <div className="flex justify-center items-center">
          <HiOutlineDotsVertical className="cursor-default flex justify-center items-center text-4xl " />
        </div>
        <a
          href="https://github.com/Oltikocmezi"
          className="cursor-pointer text-2xl hover:bg-black p-2 px-6 2xl:px-3 2xl:py-4 rounded-full duration-500"
        >
          <FaGithub />
        </a>
      </section>
    </div>
  );
}

export default Socials;
