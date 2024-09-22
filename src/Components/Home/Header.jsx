import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import icon from "../../../public/Images/image.png"
const Header = () => {
  const [input, setInput] = useState("");
  return (
    <header className=" relative z-0 bg-transparent flex items-center justify-between py-6 px-6 max-md:px-2">
      <h1 className=" text-4xl font-bold tracking-widest text-[#60A4DE]">CinePop</h1>
      <nav className=" flex space-x-7 text-lg max-[930px]:hidden text-white">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"movies"}>Movies</NavLink>
        <NavLink to={"tv_shows"}>TV Shows</NavLink>
        <NavLink to={"genre"}>Genre</NavLink>
        <NavLink to={"about"}>About</NavLink>
      </nav>
      <div className=" flex space-x-4 max-[930px]:hidden">
        <input
          className=" bg-gray-100 w-[25vw] py-3 px-6 rounded-xl focus:ring-blue-900"
          placeholder="Search movies"
          type="text"
          name="input"
          id="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className=" text-white bg-blue-900 px-5 py-3 rounded-xl ">
          Search
        </button>
      </div>
      <div className="hidden max-[930px]:block">
        <img className=" size-8" src={icon} alt="" />
      </div>
    </header>
  );
};

export default Header;
