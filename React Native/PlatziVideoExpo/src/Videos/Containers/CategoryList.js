import React, { Component } from "react";
import { View, FlatList } from "react-native";

import Layout from "../Components/CategoryListLayout";
import Empty from "../Components/Empty";
import Separator from "../../Sections/Components/HorizontalSeparator";
import Category from "../Components/Category";

class CategoryList extends Component {
  renderEmpty = () => <Empty text="No hay elementos en la lista :(" />;
  itemSeparator = () => <Separator />;

  renderItem = ({ item }) => {
    return <Category {...item} />;
  };

  keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <Layout title="Categorias">
        <FlatList
          horizontal
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
export default CategoryList;
