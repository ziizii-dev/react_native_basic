import React, { useState, useEffect, useRef } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  // Use useRef to store intervals, typed explicitly to avoid type issues
  const increaseInterval = useRef<NodeJS.Timeout | null>(null);
  const decreaseInterval = useRef<NodeJS.Timeout | null>(null);

  // Function to update the clock every second
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  // Handle increasing the counter
  const increaseCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // Handle decreasing the counter, ensure it doesn't go below 0
  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter((prevCounter) => prevCounter - 1);
    }
  };

  // Handle continuous increase when button is held
  const startIncreasing = () => {
    increaseInterval.current = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 100); // Increase counter every 100ms
  };

  // Handle continuous decrease when button is held
  const startDecreasing = () => {
    if (counter > 0) {
      decreaseInterval.current = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter > 0) {
            return prevCounter - 1;
          }
          return 0; // Prevent counter from going below 0
        });
      }, 100); // Decrease counter every 100ms
    }
  };

  const stopChanging = () => {
    if (increaseInterval.current) {
      clearInterval(increaseInterval.current);
    }
    if (decreaseInterval.current) {
      clearInterval(decreaseInterval.current);
    }
  };

  // Check the counter value to enable/disable the decrease button
  useEffect(() => {
    if (counter <= 0) {
      setIsButtonDisabled(true); // Disable decrease button when counter reaches 0
    } else {
      setIsButtonDisabled(false); // Enable decrease button when counter is greater than 0
    }
  }, [counter]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Clock UI */}
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>{time}</Text>
      </View>

      <Text style={styles.title}>Counter App</Text>

      <Text style={styles.counterText}>{counter}</Text>

      <View style={styles.buttonContainer}>
        {/* Increase Button */}
        <TouchableOpacity
          onPress={increaseCounter} // Single click increases by 1
          onPressIn={startIncreasing} // Hold to continuously increase
          onPressOut={stopChanging} // Stop when the press is released
          style={styles.button}
        >
          <Text style={styles.buttonText}>Increase</Text>
        </TouchableOpacity>

        {/* Decrease Button */}
        <TouchableOpacity
          onPress={decreaseCounter} // Single click decreases by 1
          onPressIn={startDecreasing} // Hold to continuously decrease
          onPressOut={stopChanging} // Stop when the press is released
          style={[styles.button, { opacity: isButtonDisabled ? 0.5 : 1 }]} // Disable button if counter is 0
          disabled={isButtonDisabled} // Disable the button when counter is 0 or when button is disabled
        >
          <Text style={styles.buttonText}>Decrease</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    marginTop: 10, // Added a little spacing between counter text and buttons
  },
  button: {
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10, // Add spacing between the buttons
  },
  buttonText: {
    fontSize: 20,
    color: "white",
  },
});
