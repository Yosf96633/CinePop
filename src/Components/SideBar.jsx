import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { Link , useNavigate } from "react-router-dom";
import sidebar, { toggle } from "../../Redux/sidebar";
import { motion } from "framer-motion";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
   const navigate = useNavigate();
  // Animation variants for sidebar items
  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: index * 0.1, // Staggered animation
      },
    }),
    hover: {
      x: 5, // Slightly move outside on hover
      transition: { type: "spring", stiffness: 300 },
    },
  };

  return (
    <div className={`backdrop-blur-lg text-white w-64 h-[50vh] min-h-[100vh] p-4 fixed top-0 right-0 z-50`}>
      <div className="flex px-3 justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Menu</h2>
        <span
          className="size-6 cursor-pointer"
          onClick={() => {
            dispatch(toggle(false));
          }}
        >
          ❌
        </span>
      </div>
      <ul className="space-y-8 text-xl mt-8">
        <li>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={0} // First item
            whileHover="hover" // Apply hover effect
          >
            <Link onClick={() => { dispatch(toggle(false)); }} to="/" className="hover:text-gray-400">Home</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={1} // Second item
            whileHover="hover" // Apply hover effect
          >
            <Link onClick={() => { dispatch(toggle(false)); }} to="/movies" className="hover:text-gray-400">Movies</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={2} // Third item
            whileHover="hover" // Apply hover effect
          >
            <Link onClick={() => { dispatch(toggle(false)); }} to="/tv_shows" className="hover:text-gray-400">TV Shows</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={3} // Fourth item
            whileHover="hover" // Apply hover effect
          >
            <Link onClick={() => { dispatch(toggle(false)); }} to="/genres" className="hover:text-gray-400">Genres</Link>
          </motion.div>
        </li>
        <li>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            custom={4} // Fifth item
            whileHover="hover" // Apply hover effect
          >
            <Link onClick={() => { dispatch(toggle(false)); }} to="/about" className="hover:text-gray-400">About</Link>
          </motion.div>
        </li>
      </ul>
      <div className="mt-6">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
          className="w-full p-2 rounded-md border border-gray-600 bg-gray-700 text-white"
        />
        <button
          onClick={()=>{
            navigate(`/search?query=${searchTerm}`)
            dispatch(toggle(false))
          }}
          className="mt-2 w-full bg-blue-600 p-2 rounded-md hover:bg-blue-500"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
