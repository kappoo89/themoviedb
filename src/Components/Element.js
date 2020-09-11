import React from "react";
import Stars from "./Stars";

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
        <Stars avg={Math.round((props.data.vote_average / 2) * 2) / 2} />
      </div>
    </div>
  );
}

export default Element;
