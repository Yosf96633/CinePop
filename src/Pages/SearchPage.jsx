import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import axios from 'axios';
import Pagination from '@mui/material/Pagination';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const [searchResults, setSearchResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch search data based on the query
  useEffect(() => {
    if (query) {
      const fetchSearchResults = async () => {
        setIsLoading(true);
        try {
          const response = await axios.get(`https://api.themoviedb.org/3/search/movie`, {
            params: {
              api_key: 'b2694ea07e565727a4263d19271ce694',
              query: query,
              page: page,
            },
          });
          setSearchResults(response.data.results);
          setTotalPages(response.data.total_pages);
        } catch (error) {
          console.error('Error fetching search results:', error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchSearchResults();
    }
  }, [query, page]);

  // Handle pagination page change
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Default dummy image for missing posters
  const dummyImage = 'https://via.placeholder.com/500x750?text=No+Image+Available';

  return (
    <div className="p-6 sm:p-8 md:p-12 lg:p-16">
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center">
        Search Results for "{query}"
      </h1>

      {/* Display loading spinner or message */}
      {isLoading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : searchResults.length > 0 ? (
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {searchResults.map((movie) => (
              <Link to={`/search/${movie.id}`} key={movie.id} className="p-4">
                <div className="bg-white shadow-lg rounded-md">
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                        : dummyImage
                    }
                    alt={movie.title || 'No Title'}
                    className="w-full h-auto rounded-md"
                  />
                  <h3 className="text-lg font-semibold mt-4">{movie.title || 'No Title'}</h3>
                  <p className="text-gray-600 text-sm mt-2">Release Date: {movie.release_date}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Pagination
              count={totalPages}
              page={page}
              onChange={handlePageChange}
              color="primary"
            />
          </div>
        </div>
      ) : (
        // Show "Result not found" if no results
        <p className="text-center text-gray-600">Result not found</p>
      )}
    </div>
  );
};

export default SearchPage;
