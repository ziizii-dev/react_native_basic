import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet,Image,ScrollView } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  // Function to update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  const increaseCounter = () => setCounter(counter + 1);
  const decreaseCounter = () => setCounter(counter - 1);

  return (
    <View style={styles.container}>
      {/* Clock UI */}
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>{time}</Text>
      </View>

      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.counterText}>{counter}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={increaseCounter} style={styles.button}>
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={decreaseCounter} style={styles.button}>
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
  },
  clockContainer: {
    position: "absolute",
    top: 20,
    left: 20,
    right: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  clockText: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 20,
  },
  counterText: {
    fontSize: 50,
    fontWeight: "bold",
    color: "black",
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
