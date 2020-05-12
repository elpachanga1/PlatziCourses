import React from "react";
import { View, Text, StyleSheet } from "react-native";

function VerticalSeparator(props) {
  return (
    <View
      style={[
        styles.separator,
        {
          borderColor: props.color ? props.color : "#eaeaea"
        }
      ]}
    >
      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separator: {
    borderWidth: 1
  }
});

export default VerticalSeparator;
