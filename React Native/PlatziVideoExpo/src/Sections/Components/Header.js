import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

export default function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.right}>{props.children}</View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: "contain" //hace que quepa bien en la imagen
  },
  container: {
    //padding: 20 //padding hace que se genere un espaciado en todas las direcciones
    paddingVertical: 10,
    paddingHorizontal: 10,
    //backgroundColor: "red",
    flexDirection: "row" //flexDirection hace que se pueda elegir direccionar por fila o por columna (defecto columna en react native)
  },
  right: {
    backgroundColor: "green",
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});
