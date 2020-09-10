import React from "react";

function Element(props) {
  const imgPath = "https://image.tmdb.org/t/p/w500" + props.data.poster_path;

  return (
    <div className="movieElement">
      <img className="movieElementImg" src={imgPath} />
      <div className="movieElementText">{props.data.name}</div>
    </div>
  );
}

export default Element;
