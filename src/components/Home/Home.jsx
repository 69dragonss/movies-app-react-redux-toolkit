import React, { useEffect } from "react";
import "./Home.scss";
import MoviesListening from "../MoviesListening/MoviesListening";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/moviesSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, []);
  return (
    <div>
      <div className="banner-img"></div>
      <MoviesListening />
    </div>
  );
};

export default Home;
