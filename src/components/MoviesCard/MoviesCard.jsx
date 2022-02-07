import React from "react";
import { Link } from "react-router-dom";
import "./MoviesCard.scss";

const MoviesCard = (props) => {
  const { data } = props;
  return (
    <div className="card-item">
      <div className="card-inner">
        <Link to={`/movie/${data.imdbID}`}>
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </Link>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;
