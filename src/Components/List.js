import React from "react";
import Element from "./Element";
import InfiniteScroll from "react-infinite-scroller";

function List(props) {
  const loadMore = (page) => {
    props.loadMore(page);
  };

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={props.hasMore}
      loader={
        <div key={0} className="loader">
          Loading ...
        </div>
      }
    >
      {props.datas.map((data, i) => {
        return <Element key={i} data={data} genres={props.genres} />;
      })}
    </InfiniteScroll>
  );
}

export default List;
