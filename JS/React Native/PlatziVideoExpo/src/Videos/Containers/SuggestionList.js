import React, { Component } from "react";
import { FlatList, Text } from "react-native";

import Layout from "../Components/SuggestionListLayout";
import Empty from "../Components/Empty";
import Separator from "../../Sections/Components/VerticalSeparator";
import Suggestion from "../Components/Suggestion";

export default class SuggestionList extends Component {
  renderEmpty = () => <Empty text="No hay elementos en la lista :(" />;
  itemSeparator = () => <Separator />;

  renderItem = ({ item }) => {
    return <Suggestion {...item} />;
  };

  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <Layout title="Sugerencias">
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.props.list}
          ListEmptyComponent={() => this.renderEmpty()}
          ItemSeparatorComponent={() => this.itemSeparator()}
          renderItem={(item) => this.renderItem(item)}
        />
      </Layout>
    );
  }
}
