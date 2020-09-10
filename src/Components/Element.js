import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import genres from "../assets/genres";

function Element(props) {
  const imgPath = "https://image.tmdb.org/t/p/w500" + props.data.poster_path;

  const genresTranslator = genres.data.find((genre) => {
    return genre.id === props.data.genre_ids[0];
  }).name;

  return (
    <div className="movieElement">
      <img className="movieElementImg" alt={props.data.name} src={imgPath} />
      <div className="movieElementText">
        <div className="movieElementTextTitle">{props.data.name}</div>
        <div className="movieElementTextGenres">{genresTranslator}</div>
      </div>

      <div className="movieElementRating">
        <FaStar />
        <FaStarHalfAlt />
        <FaRegStar />

        <div className="movieElementRatingStars">{props.data.vote_average}</div>
      </div>
    </div>
  );
}

export default Element;
