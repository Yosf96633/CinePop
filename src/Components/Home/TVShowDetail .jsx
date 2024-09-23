import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../Loading"; // Assuming you have a Spinner component for loading states

const TVShowDetail = () => {
  const { tvShowId } = useParams(); // Get the TV show ID from the URL
  const [tvShow, setTvShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTVShowDetails = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=b2694ea07e565727a4263d19271ce694&language=en-US`
        );
        const data = await response.json();
        setTvShow(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching TV show details:", error);
        setLoading(false);
      }
    };

    fetchTVShowDetails();
  }, [tvShowId]);

  if (loading) {
    return (
      <div className="pt-10 flex justify-center">
        <Spinner />
      </div>
    );
  }

  if (!tvShow) {
    return <div className="p-4">No TV show found.</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-4">{tvShow.name}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
        alt={tvShow.name}
        className="w-full h-auto max-w-md md:max-w-lg rounded-lg mb-4"
      />
      <p className="text-gray-600">First Air Date: {tvShow.first_air_date}</p>
      <p className="text-gray-600">Rating: {tvShow.vote_average} / 10</p>
      <h2 className="text-xl font-semibold mt-4">Overview</h2>
      <p className="text-gray-800">{tvShow.overview}</p>
      <h2 className="text-xl font-semibold mt-4">Genres</h2>
      <ul className="list-disc pl-5">
        {tvShow.genres.map((genre) => (
          <li key={genre.id} className="text-gray-800">{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TVShowDetail;
