import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Lable({ title }: { title: string }) {
  return (
    <View style={styles.lableContainer}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  lableContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: "#333",
  },
});
