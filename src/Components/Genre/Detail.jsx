import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Loading"; // Assuming you have a Spinner component for loading states

const Detail = () => {
  const { movieId } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=b2694ea07e565727a4263d19271ce694&language=en-US`
        );
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (loading) {
    return (
      <div className="pt-10 flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (!movie) {
    return <div className="p-4">No movie found.</div>;
  }

  return (
    <div className="p-4 md:p-8 pt-8">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto max-w-md md:max-w-lg rounded-lg mb-4"
      />
      <p className="text-gray-600">Release Date: {movie.release_date}</p>
      <p className="text-gray-600">Rating: {movie.vote_average} / 10</p>
      <h2 className="text-xl font-semibold mt-4">Overview</h2>
      <p className="text-gray-800">{movie.overview}</p>
      <h2 className="text-xl font-semibold mt-4">Genres</h2>
      <ul className="list-disc pl-5">
        {movie.genres.map((genre) => (
          <li key={genre.id} className="text-gray-800">{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Detail;
