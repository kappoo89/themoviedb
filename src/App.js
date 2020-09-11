import React from "react";
import "./assets/style/App.scss";

import List from "./Components/List.js";
import genres from "./assets/genres";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      datas: [],
      hasMore: true,
    };
  }

  componentDidMount() {}

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
      "https://api.themoviedb.org/3/tv/popular?api_key=64ddc370525a71b29f579200eba5b23a&language=en-US&page=" +
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
        genres={genres.data}
      />
    );
  }
}

export default App;
