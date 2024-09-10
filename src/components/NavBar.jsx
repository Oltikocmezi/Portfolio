import React, { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { GrContact } from "react-icons/gr";
import { GoPerson } from "react-icons/go";
import { TbHeartHandshake } from "react-icons/tb";

const MenuItems = [
  {
    title: "Home",
    icon: <AiFillHome />,
    url: "#Home",
    cName: "links",
  },
  {
    title: "Contact",
    icon: <GoPerson />,
    url: "#About",
    cName: "links",
  },
  {
    title: "Contact",
    icon: <TbHeartHandshake />,
    url: "#Projects",
    cName: "links",
  },
  {
    title: "Contact",
    icon: <GrContact />,
    url: "#Contact",
    cName: "links",
  },
];

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="min-w-80 fixed bottom-0 left-1/2 transform -translate-x-1/2 sm:bottom-6 sm:w-full flex justify-center items-center">
      <nav className="nav bg-transparent/10 sm:w-3/6 md:w-2/6 h-16 sm:h-20 flex items-center justify-center rounded-full inset-0 backdrop-blur-2xl">
        <ul className=" flex justify-around w-full items-center">
          {MenuItems.map((item, index) => {
            return (
              <a href={item.url}>
                <li
                  key={index}
                  style={{
                    backgroundColor:
                      activeIndex === index ? "black" : "transparent",
                  }}
                  className={`text-white cursor-pointer hover:bg-black p-4 rounded-full duration-500 text-xl
                  ${
                    activeIndex === index
                      ? "bg-black"
                      : "hover:bg-black hover:text-white"
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {item.icon}
                </li>
              </a>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
