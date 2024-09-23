import React, { useEffect, useState } from 'react';
import { Footer, Header, HeroSection } from '../Components/index';
import { Outlet, useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addBG } from '../../Redux/displaybg';

// Loader function to fetch movie data
export async function Loader() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=b2694ea07e565727a4263d19271ce694`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return "Error while fetching";
  }
}

const HomePage = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Dispatch the first 5 movies to Redux only after data is available
  useEffect(() => {
    if (data && data.results) {
      dispatch(addBG(data.results.slice(0, 11))); // Only dispatch once when the component mounts
    }
  }, [data, dispatch]);

  // Select background movies from Redux state
  const backgroundMovies = useSelector((state) => state.displaybg[0]);
  const bars = useSelector(state=>state.sidebar)

  // Change background every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgroundMovies.length);
    }, 7500); // Change every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [backgroundMovies]);

  // Ensure there are movies available
  if (!backgroundMovies || backgroundMovies.length === 0) {
    return null; // Or a loading indicator
  }

  // Get the current background movie
  const currentMovie = backgroundMovies[currentIndex];

  return (
    <div>
      <div
      className=' h-[85vh] max-[450px]:h-[70vh]'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w1280${currentMovie.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background-image 0.5s ease-in-out', // Smooth transition
      }}>
        <div className={`absolute  h-[85vh] max-[450px]:h-[70vh] inset-0 bg-black opacity-60`}></div>
      <div>
        <Header />
        <HeroSection movie={currentMovie} /> {/* Pass the current movie to HeroSection */}
      </div>
    </div>
    <Outlet/>
    <Footer/>
      </div>
  );
};

export default HomePage;
