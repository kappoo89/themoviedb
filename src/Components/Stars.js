import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function Stars(props) {
  let rating = [];

  for (let i = 0; i < 5; i++) {
    const count = props.avg - i;
    if (count < 0.5) {
      rating.push(<FaRegStar key={i} />);
    } else if (count >= 0.5 && count < 1) {
      rating.push(<FaStarHalfAlt key={i} />);
    } else {
      rating.push(<FaStar key={i} />);
    }
  }

  return (
    <div>
      {rating} {props.avg}
    </div>
  );
}

export default Stars;
