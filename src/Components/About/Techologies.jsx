import React from "react";
import {
  react,
  reactrouter,
  netlify,
  redux,
  tailwind,
} from "../../../public/image";
import { animate, motion  } from "framer-motion";
const parentVarient = {
    hidden:{
      opacity:0,
    },
    visible:{
      opacity:1,
      transition:{
        duration:0.3,
        delayStagger:0.3,
        staggerChildren:0.4
      }
    }
  }
  const childVarient = {
    hidden:{
      opacity:0,
      y:100,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        duration:0.4,
      }
    }
  }
const Technologies = () => {
  return (
    <motion.div
       variants={parentVarient}
       initial={"hidden"}
       whileInView={"visible"}
       viewport={{once:true}}
     className="p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 bg-gray-100 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8">
        Technologies Used
      </h2>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-600 mb-12">
        CinePop is built using cutting-edge technologies to provide a smooth and
        modern experience for movie lovers.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-center">
        {/* React */}
        <motion.div
        variants={childVarient}
         className="p-4">
          <img
            src={react} // Add your React image here
            alt="React"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
            React
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            A powerful JavaScript library for building dynamic user interfaces.
          </p>
        </motion.div>

        {/* Tailwind CSS */}
        <motion.div variants={childVarient} className="p-4">
          <img
            src={tailwind} // Add your Tailwind CSS image here
            alt="Tailwind CSS"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
            Tailwind CSS
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            A utility-first CSS framework for quickly building custom designs.
          </p>
        </motion.div>

        {/* Redux */}
        <motion.div variants={childVarient} className="p-4">
          <img
            src={redux} // Add your Redux image here
            alt="Redux"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
            Redux
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            A predictable state container for managing app state efficiently.
          </p>
        </motion.div>

        {/* Framer Motion */}
        <motion.div variants={childVarient} className="p-4 flex flex-col justify-center items-center">
          <svg
            viewBox="3.7 3.7 43.6 43.6"
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto"
          >
            <path
              d="m47.3 3.7v21.8l-10.9 10.9-10.9 10.9-10.9-10.9 10.9-10.9v.1-.1z"
              fill="#59529d"
            />
            <path d="m47.3 25.5v21.8l-10.9-10.9z" fill="#5271b4" />
            <path
              d="m25.5 25.5-10.9 10.9-10.9 10.9v-43.6l10.9 10.9z"
              fill="#bb4b96"
            />
          </svg>
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
            Framer Motion
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            An animation library that simplifies the creation of complex
            animations.
          </p>
        </motion.div>

        {/* Netlify */}
        <motion.div  variants={childVarient} className="p-4">
          <img
            src={netlify} // Add your Netlify image here
            alt="Netlify"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
            Netlify
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            A cloud platform for deploying modern web applications seamlessly.
          </p>
        </motion.div>

        {/* React Router */}
        <motion.div variants={childVarient}  className="p-4">
          <img
            src={reactrouter} // Add your React Router image here
            alt="React Router"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
            React Router
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            A collection of navigational components for React applications.
          </p>
        </motion.div>

        {/* TMDB */}
        <motion.div variants={childVarient} className="p-4">
          <img
            src="https://play-lh.googleusercontent.com/XXqfqs9irPSjphsMPcC-c6Q4-FY5cd8klw4IdI2lof_Ie-yXaFirqbNDzK2kJ808WXJk" // Add your TMDB image here
            alt="TMDB"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 mx-auto"
          />
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mt-4">
            TMDB
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            The Movie Database (TMDB) API for fetching movie data.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;
