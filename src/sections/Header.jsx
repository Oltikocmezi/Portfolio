import React from "react";
import NavBar from "../components/NavBar";
import headerbg from "../assets/cool-background.png";
import profile from "../assets/Profile.png";
import Socials from "../components/Socials";
// w-full h-screen inset-0 backdrop-blur-2xl
function Header(props) {
  const Id = props;
  return (
    <div id={Id} className="min-w-80 w-full h-screen bg-red-500 min-h-screen">
      <div
        className="App-header bg-cover bg-center bg-no-repeat text-white"
        style={{ backgroundImage: `url(${headerbg})` }}
      >
        <section className=" flex flex-col justify-start items-center w-fit h-screen">
          <div className=" p-4 mt-24">
            <p className="text-md sm:text-lg font-sans font-medium cursor-default">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-6xl font-sans font-medium cursor-default">
              Olt Koçmezi
            </h1>
            <p className="text-gray-300 text-md sm:text-lg font-sans font-medium mt-4 cursor-default">
              Front End Developer
            </p>
          </div>

          <div className="flex mt-8 justify-around items-center">
            <button className="border hover:border-green-800 border-green-400 hover:bg-green-800 duration-500 px-3 py-3 sm:px-6 sm:py-4 text-green-400 text-lg sm:text-xl font-sans font-medium rounded-lg">
              Download CV
            </button>
            <button className="ml-10 bg-green-700 hover:bg-green-800 duration-500 px-3 py-3 sm:px-6 sm:py-4 text-white text-lg sm:text-xl font-sans rounded-lg">
              Let's Talk
            </button>
          </div>
        </section>

        <div className=" min-w-fit absolute bottom-0 sm:bottom-6 bg-transparent/10 sm:w-96 sm:h-96 rounded-t-full">
          <img
            src={profile}
            alt="img"
            className=" min-w-64 w-64 rounded-t-full h-72 sm:w-full sm:h-full"
          />
        </div>

        <Socials />
        <NavBar />
      </div>
    </div>
  );
}

export default Header;
