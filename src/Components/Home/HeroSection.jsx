import React from 'react';
import ReactStars from 'react-rating-stars-component'; // Import the star rating library

const HeroSection = ({ movie }) => {
  return (
    <div className="p-5 md:p-10 text-white relative z-10 top-8 xl:top-[5rem] max-md:top-3">
      <h1 className="text-3xl md:text-5xl font-bold xl:text-7xl">{movie.title}</h1>
      <p className="mt-2 text-lg max-xl:text-2xl">{movie.overview}</p>
      <p className="mt-2 xl:text-xl  sm:text-3xl ">Release Date: <span className=' font-medium'>{movie.release_date}</span></p>
      <div className="flex items-center mt-2">
        <ReactStars
          count={5}
          value={movie.vote_average / 2} // Assuming vote_average is out of 10
          size={24}
          activeColor="#ffd700"
          edit={false} // Make it read-only
        />
        <span className="ml-2  sm:text-3xl">{movie.vote_average}</span> {/* Show numeric rating */}
      </div>
    </div>
  );
};

export default HeroSection;
