import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_genre } from "../../../Redux/genre";
import Pagination from '@mui/material/Pagination';
import { Link, useParams, useSearchParams } from "react-router-dom";
import Spinner from "../Loading";

const GenreMovies = () => {
  const {id}  = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const movies = useSelector((state) => state.genre[0]); // Assuming genre movies are stored here

  async function fetchMoviesByGenre() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b2694ea07e565727a4263d19271ce694&with_genres=${id}&page=${page}`
      );
      const data = await response.json();
      console.log(data.results);
      
      dispatch(add_genre(data.results));
      setTotalPages(data.total_pages);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching genre movies:", error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMoviesByGenre();
  }, [page, id]);

  const handlePageChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0); // Scroll to the top on page change
  };

  if (loading) {
    return (
      <div className="pt-10 flex justify-center">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container p-4 max-w-[100vw]">
      <h1 className="text-2xl font-bold mb-4 text-center py-6">Explore the best one</h1>
      <div className="grid grid-cols-3 gap-4 max-[550px]:grid-cols-2 max-[550px]:gap-2">
        {movies && movies.map((movie) => (
          <Link to={`/genres/${id}/${movie.id}`}>
          <div key={movie.id} className="bg-white border rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              alt={movie.title} 
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{movie.title}</h3>
              <p className="text-gray-600">Release date: {movie.release_date}</p>
              <p className="text-gray-600">Popularity: {movie.popularity}</p>
            </div>
          </div></Link>
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

export default GenreMovies;
