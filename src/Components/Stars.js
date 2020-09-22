import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Stars(props) {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    const count = Math.round((props.avg / 2) * 2) / 2 - i;
    if (count < 0.5) {
      rating.push(<FaRegStar key={i} />);
    } else if (count >= 0.5 && count < 1) {
      rating.push(<FaStarHalfAlt key={i} />);
    } else {
      rating.push(<FaStar key={i} />);
    }
  }

  return (
    <div className="rating">
      <div className="ratingStars">{rating}</div>
      <div className="ratingAvg">{props.avg}</div>
    </div>
  );
}

export default Stars;
