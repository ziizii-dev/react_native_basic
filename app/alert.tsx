import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Alert({ title, onClose }: { title: string, onClose: () => void }) {
  return (
    <View style={styles.alertBox}>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity style={styles.okButton} onPress={onClose}>
        <Text style={styles.okText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  alertBox: {
    padding: 20,
    margin: 20,
    backgroundColor: "#f8d7da",  // Light red background for the alert box
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#f5c6cb",  // Red border color
    alignItems: "center",  // Center the text and button horizontally
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: "#721c24",  // Dark red text color for alert message
    marginBottom: 15,  // Space between text and button
  },
  okButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#28a745",  // Green background for the OK button
    borderRadius: 5,
  },
  okText: {
    fontSize: 16,
    color: "#fff",  // White text color for OK button
    fontWeight: "bold",
  },
});
