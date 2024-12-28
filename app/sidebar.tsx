import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default function Sidebar({ title, toggleSidebar }: { title: string, toggleSidebar: () => void }) {
  return (
    <View style={styles.sidebarContainer}>
      <TouchableOpacity onPress={toggleSidebar} style={styles.closeButton}>
        <Text style={styles.buttonText}>×</Text>  
      </TouchableOpacity>

      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  sidebarContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    padding: 20,
    backgroundColor: "lightgray", 
    borderRadius: 8,
    alignItems: "center",
    width: 250,
    zIndex: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",  // White color for the text
  },
  closeButton: {
    position: "absolute",
    top: 10, // Position the button inside the sidebar at the top
    right: 20, // Position the close button on the right side
    zIndex: 10,
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
