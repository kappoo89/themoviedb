import React, { useState } from "react";
import List from "../Components/List.js";
import genres from "../assets/genres";

function AppList() {
  const [datas, setDatas] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const loadMore = (page) => {
    setHasMore(false);
    if (page > 500) {
      return;
    }
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=64ddc370525a71b29f579200eba5b23a&language=en-US&page=" +
        page
    )
      .then((response) => response.json())
      .then((data) => {
        setDatas((prevDatas) => [...prevDatas, ...data.results]);
        setHasMore(true);
      });
  };

  return (
    <List
      className="list"
      datas={datas}
      loadMore={loadMore}
      hasMore={hasMore}
      genres={genres.data}
    />
  );
}

export default AppList;
