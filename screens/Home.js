import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

export default function Home(props) {
  return (
    <View style={styles.container}>
        <Text style={[styles.text, styles.textTitle]}>My Diary</Text>
        <Text style={styles.text}>Gratitude Journey</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "forestgreen",
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    color: "beige",
    fontSize: 33,
    fontWeight: "700",
  },

  textTitle:{
    color: "darkgreen",
    fontSize: 68,
    fontWeight: "700"
  },
  textCount:{
    color: "lightgreen",
    fontSize: 27
  },
  designButton:{
    marginTop: 100
  }
});
