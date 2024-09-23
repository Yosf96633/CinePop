import React from 'react';
import { Link } from 'react-router-dom';

const DisplayGenre = ({ genres }) => {
  return (
    <div className="p-12 max-md:p-6 ">
      {/* Heading and Paragraph about genres */}
      <h2 className="text-3xl font-bold text-center mb-4">
        Explore Movie Genres
      </h2>
      <p className="text-lg text-center text-gray-600 mb-6">
        Discover a variety of movie genres to find the perfect film for your mood. 
        Click on any genre to explore the best movies available!
      </p>
      {/* Genre Links */}
      <div className="flex flex-wrap justify-center gap-6">
        {genres.map((genre) => (
          <Link
            to={`/genres/${genre.id}`} // Use genre id in link
            key={genre.id}
            className="relative group block w-full sm:w-56 md:w-64 lg:w-72 xl:w-80 p-5 rounded-lg 
                       text-center transition-transform duration-300 transform hover:scale-105 
                       shadow-lg"
          >
            {/* Genre Title with Unique Styling */}
            <span className="block font-bold text-xl sm:text-2xl md:text-3xl">
              {genre.name}
            </span>

            {/* Decorative Gradient Border for Hover */}
            <span
              className="absolute inset-0 rounded-lg"
              style={{ borderWidth: '2px', borderStyle: 'solid' }}
            ></span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DisplayGenre;
