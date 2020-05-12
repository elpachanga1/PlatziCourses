import React, { Component } from "react";

import Home from "./src/Screens/Containers/Home";
import Header from "./src/Sections/Components/Header";
import SuggestionList from "./src/Videos/Containers/SuggestionList";
import CategoryList from "./src/Videos/Containers/CategoryList";
import API from "./src/Utils/api";
import Player from "./src/Player/Containers/Player";

export default class App extends Component {
  state = {
    suggestionList: [],
    categoryList: [],
  };

  async componentDidMount() {
    const movies = await API.getSuggestions(10);
    const categories = await API.getMovies();
    console.log(movies);
    console.log(categories);
    this.setState({ suggestionList: movies, categoryList: categories });
  }

  render() {
    return (
      <Home>
        <Header />
        <Player />
        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
