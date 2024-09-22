import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {Spinner} from "../index";

const TrendingTvShows = ({Loading}) => {
  // Select the trending Shows from Redux state
  const Shows = useSelector((state) => state.trendingTvShow[0]);
if(Loading)
{
    return Spinner;
}
  return (
    <div className=" whitespace-nowrap p-5">
       <div className=' flex items-center space-x-3'>
      <span className="text-2xl font-bold mb-4 text-blue-900 max-[500px]:text-lg">Trending TV Shows</span>
      <span className=' border-b w-[50%] border-blue-900 place-items-center self-center'></span>
      </div>
      <div className="flex space-x-4 overflow-x-auto">
        {Shows.map((show) => (
          <Link key={show.id} to={`/Shows/${show.id}`} className="group">
            <div className="relative w-40 h-60">
              <img
                src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
                alt={show.name}
                className="object-cover w-full h-full rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-2 text-white rounded-b-lg">
                <h3 className="font-semibold text-wrap">{show.name}</h3>
                <p className="text-sm">{show.first_air_date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TrendingTvShows;
