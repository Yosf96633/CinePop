import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../../../Redux/trendingmovies"
import {Footer, Sidebar, Testimonial, TrendingMovies, TrendingTvShows} from "../index"
import { addTrendingTvShow } from "../../../Redux/trendingtvShow";
import { motion } from "framer-motion";
const Home = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");
  const [Mloading, setMLoading] = useState(true);
  const [Sloading, setSLoading] = useState(true);
  async function FetchDataMovies() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/week?api_key=b2694ea07e565727a4263d19271ce694`
      );
      const data = await response.json();
      dispatch(addTrendingMovies(data.results))
      setMLoading(false)
    } catch (error) {
      setMessage("Error while fetching");
    }
  }
  async function FetchDataShows() {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/tv/week?api_key=b2694ea07e565727a4263d19271ce694`
      );
      const data = await response.json();
      dispatch(addTrendingTvShow(data.results))
      setSLoading(false)
    } catch (error) {
      setMessage("Error while fetching");
    }
  }
  useEffect(() => {
    FetchDataMovies()
    FetchDataShows();
  }, []);
  return <div>
    <motion.div
    className=" relative -z-10"
      initial={{
        opacity:0,
        x:-100
      }}
      animate={{
        opacity:1,
        x:0
      }}
      transition={{
        delay:0.2,
        duration:0.5,
        ease:"backInOut"
      }}
    >
    <TrendingMovies Loading={Mloading}/>
    <TrendingTvShows Loading={Sloading}/>
    </motion.div>
    <Testimonial/>
  </div>;
};

export default Home;
