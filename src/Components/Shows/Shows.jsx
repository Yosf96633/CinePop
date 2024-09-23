import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_shows } from "../../../Redux/shows";
import Pagination from '@mui/material/Pagination';
import { Link } from "react-router-dom";

const Shows = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const shows = useSelector((state) => state.shows[0]);

  async function FetchShows() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/popular?api_key=b2694ea07e565727a4263d19271ce694&language=en-US&page=${page}`
      );
      const data = await response.json();
      dispatch(add_shows(data.results));
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Error fetching shows:", error);
    }
  }

  useEffect(() => {
    FetchShows();
  }, [page]);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0); // Scroll to the top on page change
  };

  return (
    <div className="container p-4 max-w-[100vw]">
      <h1 className="text-2xl font-bold mb-4">Popular TV Shows</h1>
      <div className="grid grid-cols-3 gap-4 max-[550px]:grid-cols-2 max-[550px]:gap-2">
        {shows && shows.map((show) => (
          <Link key={show.id} to={`/tv_shows/${show.id}`}>
            <div className="bg-white border rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
              <img 
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`} 
                alt={show.name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{show.name}</h3>
                <p className="text-gray-600">Release date: {show.first_air_date}</p>
                <p className="text-gray-600">Popularity: {show.popularity}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          variant="outlined"
          shape="rounded"
          color="primary"
        />
      </div>
    </div>
  );
};

export default Shows;
