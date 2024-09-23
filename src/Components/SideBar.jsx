import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {toggle} from "../../Redux/sidebar"
const Sidebar = () => {
    const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here, e.g., redirect to a search results page
    console.log("Search Term:", searchTerm);
  };
  
  return (
    <div className={`bg-gray-800 text-white w-64 h-[50vh] min-h-[100vh] p-4 fixed top-0 right-0 z-50`}>
      <div className=" flex px-3 justify-between items-center mb-6">
      <h2 className="text-3xl font-bold">Menu</h2>
      <span className="size-6" onClick={ () =>{
        dispatch(toggle(false))
      }}>❌</span>
      </div>
      <ul className="space-y-8 text-xl mt-8">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/movies" className="hover:text-gray-400">Movies</Link>
        </li>
        <li>
          <Link to="/tv_shows" className="hover:text-gray-400">TV Shows</Link>
        </li>
        <li>
          <Link to="/genres" className="hover:text-gray-400">Genres</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-gray-400">About</Link>
        </li>
      </ul>
      <form onSubmit={handleSearch} className="mt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
        />
        <button
          type="submit"
          className="mt-2 w-full bg-blue-600 p-2 rounded-md hover:bg-blue-500"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
