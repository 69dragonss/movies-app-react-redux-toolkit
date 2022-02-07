import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../../features/movies/moviesSlice";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesListening.scss";

const MoviesListening = () => {
  const movies = useSelector(getAllMovies);
  const series = useSelector(getAllShows);
  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MoviesCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  let renderShows = "";
  renderShows =
    series.Response === "True" ? (
      series.Search.map((show, index) => {
        return <MoviesCard key={index} data={show} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{series.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">{renderMovies}</div>
      </div>
      <div className="movie-list">
        <h2>TV Shows</h2>
        <div className="movie-container">{renderShows}</div>
      </div>
    </div>
  );
};

export default MoviesListening;
