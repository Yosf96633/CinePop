import React from "react";
import { HomePage } from "./Pages/pages";
import { Home } from "./Components/index";
import { Loader } from "./Pages/HomePage";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route loader={Loader} path="/" element={<HomePage />}>
        <Route index element={<Home />} />
      </Route>
    </>
  )
);
const App = () => {
  return (
    <div className=" w-[100vw] overflow-x-hidden">
      <RouterProvider router={route} />
    </div>
  );
};

export default App;
