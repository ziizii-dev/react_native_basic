import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Route({ title }: { title: string }) {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.text}>{title}</Text>

    </View>


  );


}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin:4,
    backgroundColor: "blue",
    borderRadius: 5,
    alignItems: "center",  // Centers the text horizontally
    justifyContent: "center",  // Centers the text vertically
  },
  text: {
    fontSize: 20,  // Adjusted font size for button text
    fontWeight: 'bold',
    color: "white",
  },
});
