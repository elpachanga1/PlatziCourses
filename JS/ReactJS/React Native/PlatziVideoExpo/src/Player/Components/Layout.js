import React from "react";
import { Text, View, StyleSheet } from "react-native";

function Layout(props) {
  return (
    <View style={styles.container}>
      <View style={styles.video}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "56.25%",
  },
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: "black",
  },
});

export default Layout;
