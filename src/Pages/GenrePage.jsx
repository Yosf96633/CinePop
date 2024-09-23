import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DisplayGenre } from '../Components/index';

// Use as Loader Function for pre-fetching
export async function FetchGenre() {
   try {
       const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=b2694ea07e565727a4263d19271ce694&language=en-US`);
       const result = await response.json();
       return result;
   } catch (error) {
       return { error: "Error while fetching genres" };
   }
}

const GenrePage = () => {
    const data = useLoaderData(); // Data from the loader
    const [genre, setGenre] = useState([]);

    // useEffect to update the state after data is loaded
    useEffect(() => {
        if (data && data.genres) {
            setGenre(data.genres);
        }
    }, [data]);

    return (
        <div>
            {genre.length > 0 ? (
                <DisplayGenre genres={genre} />
            ) : (
                <p>No genres available</p>
            )}
        </div>
    );
};

export default GenrePage;

