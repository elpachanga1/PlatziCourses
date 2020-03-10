import React from "react";
import { Text } from "react-native";

import Home from "./src/Screens/Containers/Home";
import Header from "./src/Sections/Components/Header";
import SuggestionList from "./src/Videos/Containers/SuggestionList";

export default function App() {
  return (
    <Home>
      <Header />
      <SuggestionList />
    </Home>
  );
}
