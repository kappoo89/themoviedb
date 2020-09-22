import React from "react";
import { Link } from "react-router-dom";
import Stars from "./Stars";

function Element(props) {
  const imgPath = "https://image.tmdb.org/t/p/w500" + props.data.poster_path;
  const styleBackgroundImage = {
    backgroundImage:
      "url(" +
      "'https://image.tmdb.org/t/p/w500" +
      props.data.backdrop_path +
      "')",
  };
  const genresTranslatorFromId = (ids, i) => {
    const genre = props.genres.find((genre) => {
      return genre.id === ids[i];
    });
    if (genre == null) {
      return genresTranslatorFromId(ids, ++i);
    }
    return genre.name;
  };

  return (
    <Link className="movieElement" to={"/detail/" + props.data.id}>
      <div
        className="movieElementBackground"
        style={styleBackgroundImage}
      ></div>
      <div className="movieElementMedia">
        <img
          className="movieElementMediaImg"
          alt={props.data.name}
          src={imgPath}
        />
      </div>
      <div className="movieElementData">
        <div className="movieElementDataText">
          <div className="movieElementDataTextTitle">{props.data.name}</div>
          <div className="movieElementDataTextGenres">
            {genresTranslatorFromId(props.data.genre_ids, 0)}
          </div>
        </div>
        <Stars avg={props.data.vote_average} />
      </div>
    </Link>
  );
}

export default Element;
