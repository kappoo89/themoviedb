import React from "react";
import "./App.less";

import List from "./Components/List.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      hasMore: true,
    };
  }

  loadMore = (page) => {
    if (page > 500) {
      this.setState({
        hasMore: false,
      });
      return;
    }
    this.setState({
      hasMore: false,
    });
    fetch(
      "https://api.themoviedb.org/3/tv/popular?api_key=64ddc370525a71b29f579200eba5b23a&language=it-IT&page=" +
        page
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => {
          return {
            datas: [...prevState.datas, ...data.results],
            hasMore: true,
          };
        });
      });
  };

  render() {
    return (
      <List
        className="list"
        datas={this.state.datas}
        loadMore={this.loadMore}
        hasMore={this.state.hasMore}
      />
    );
  }
}

export default App;
