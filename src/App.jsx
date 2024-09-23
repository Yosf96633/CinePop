import React from "react";
import { GenrePage, HomePage, MoviesPage, ShowsPage } from "./Pages/pages";
import { Detail, GenreMovies, Home, MovieDetail, TVShowDetail  , Sidebar} from "./Components/index";
import { Loader } from "./Pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { FetchGenre } from "./Pages/GenrePage";
const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route loader={Loader} path="/" element={<HomePage />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<MoviesPage/>}/>
        <Route path="movies/:movieId" element={<MovieDetail/>}/>
        <Route path="tv_shows" element={<ShowsPage/>}/>
        <Route path="tv_shows/:tvShowId" element={<TVShowDetail/>}/>
        <Route loader={FetchGenre} path="genres" element={<GenrePage/>}/>
        <Route path="/genres/:id" element={<GenreMovies />} />
        <Route path="/genres/:id/:movieId" element={<Detail />} />


      </Route>
    </>
  )
);
const App = () => {
  return (
    <div className="w-[100vw] overflow-x-hidden">
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
