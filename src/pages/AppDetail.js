import React, { useState, useEffect } from "react";
import Stars from "../Components/Stars";
import Pill from "../Components/Pill";
import Profile from "../Components/Profile";
import { Link, useParams } from "react-router-dom";

function AppDetail() {
  const [data, setData] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/tv/" +
        id +
        "?api_key=64ddc370525a71b29f579200eba5b23a&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) {
    return <h1>"Loading...</h1>;
  } else {
    const style = {
      backgroundImage:
        "linear-gradient(to top, #22272e 70%, rgba(	34, 39, 46, 0)),url(" +
        "'https://image.tmdb.org/t/p/w500" +
        data.backdrop_path +
        "')",
    };

    const genres = data.genres.map((genre, i) => (
      <Pill key={i} data={genre.name} />
    ));

    const creators = data.created_by.map((creator, i) => (
      <Profile key={i} data={creator} />
    ));

    return (
      <div className="detail">
        <div style={style} className="detailBack"></div>
        <div className="detailCard">
          <div className="detailCardRow">
            <div className="detailCardRowImgWrapper">
              <img
                alt={data.name}
                src={"https://image.tmdb.org/t/p/w500" + data.poster_path}
              />
            </div>
            <div className="detailCardRowMainData">
              <div className="detailCardRowMainDataTitle">{data.name}</div>
              <div className="detailCardRowMainDataDate">
                {data.last_air_date}
              </div>
              <Stars avg={data.vote_average} />
            </div>
          </div>
          <div className="detailCardRow">
            <div className="detailCardRowGenres">
              <span className="detailCardRowGenresTitle">Genres</span>
              <div className="detailCardRowGenresData">{genres}</div>
            </div>
          </div>
          <div className="detailCardRow">
            <div className="detailCardRowIntro">
              <span className="detailCardRowIntroTitle">Introduce</span>
              <div className="detailCardRowIntroData">{data.overview}</div>
            </div>
          </div>
          <div className="detailCardRow">
            <div className="detailCardRowCreators">
              <span className="detailCardRowCreatorsTitle">Creators</span>
              <div className="detailCardRowCreatorsData">{creators}</div>
            </div>
          </div>

          {/*
      <div to="/">BACK</div>
        <div>play</div>
*/}
        </div>
      </div>
    );
  }
}

export default AppDetail;
