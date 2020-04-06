import React, { Component } from "react";

import Home from "./src/Screens/Containers/Home";
import Header from "./src/Sections/Components/Header";
import SuggestionList from "./src/Videos/Containers/SuggestionList";
import CategoryList from "./src/Videos/Containers/CategoryList";
import API from "./src/Utils/api";
import { Video } from "expo-av";
import { View } from "react-native";

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
        <View style={{ flex: 1, height: 100 }}>
          <Video
            source={{
              uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            rate={1.0}
            volume={1.0}
            isMuted={false}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
            }}
          />
        </View>

        <CategoryList list={this.state.categoryList} />
        <SuggestionList list={this.state.suggestionList} />
      </Home>
    );
  }
}
