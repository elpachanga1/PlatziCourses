import React, { Component } from "react";
import { Video } from "expo-av";
import { StyleSheet } from "react-native";
import Layout from "../Components/Layout";

class Player extends Component {
  render() {
    return (
      <Layout>
        <Video
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          useNativeControls
          style={styles.video}
        />
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
});

export default Player;
