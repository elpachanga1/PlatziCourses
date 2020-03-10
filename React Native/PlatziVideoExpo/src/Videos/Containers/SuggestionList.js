import React, { Component } from "react";
import { FlatList, Text } from "react-native";

import Layout from "../Components/SuggestionListLayout";

export default class SuggestionList extends Component {
  render() {
    const list = [
      {
        key: "1",
        title: "hablame"
      },
      {
        key: "2",
        title: "prrrro"
      }
    ];

    return (
      <Layout title="Sugerencias">
        <FlatList
          data={list}
          renderItem={({ item }) => <Text>{item.title}</Text>}
        />
      </Layout>
    );
  }
}
