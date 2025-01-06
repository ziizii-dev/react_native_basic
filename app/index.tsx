import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Alert,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import Counter from "./counterapp";
import Lable from "./labletitle";
import Button from "./button";
import Sidebar from "./sidebar";

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const [result, setResult] = useState("");

  const handleChange = (name: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const { name, age, email } = formData;

    if (!name || !age || !email) {
      setResult("Please fill out all fields.");
      return;
    }

    setResult(`Name: ${name}, Age: ${age}, Email: ${email}`);
  };
  const cancleButton = () => {
    Alert.alert(
      "Alert",
      "Do you really want to cancel?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"), // Action for the OK button
        },
      ],
      { cancelable: false } // Prevent closing the alert by tapping outside
    );
  };
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableOpacity onPress={toggleSidebar} style={styles.hamburgerButton}>
        <Text style={styles.buttonText}>☰</Text>
      </TouchableOpacity>

      {isSidebarVisible && <Sidebar title="" toggleSidebar={toggleSidebar} />}

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.innerContainer}>
            <Lable title="Data Input Form" />

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name:</Text>
              <TextInput
                style={styles.input}
                value={formData.name}
                onChangeText={(value) => handleChange("name", value)}
                placeholder="Enter your name"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age:</Text>
              <TextInput
                style={styles.input}
                value={formData.age}
                onChangeText={(value) => handleChange("age", value)}
                placeholder="Enter your age"
                keyboardType="numeric"
              />
              
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email:</Text>
              <TextInput
                style={styles.input}
                value={formData.email}
                onChangeText={(value) => handleChange("email", value)}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            </View>
            <View></View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={cancleButton}>
                <Button title="Cancle" />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleSubmit}>
                {/* <Text style={styles.buttonText}>Submit</Text> */}
                <Button title="Submit" />
              </TouchableOpacity>
            </View>

            {result ? (
              <View style={styles.resultContainer}>
                <Text style={styles.resultHeader}>Result:</Text>
                <Text style={styles.resultText}>{result}</Text>
              </View>
            ) : null}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  inputGroup: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#555",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "80%",
    marginTop: 10, // Added a little spacing between counter text and buttons
  },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 16,
  //   fontWeight: "bold",
  // },
  resultContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  resultHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  resultText: {
    fontSize: 16,
    color: "#555",
  },
  containerSidebar: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  mainContent: {
    marginTop: 20,
    fontSize: 18,
  },
  hamburgerButton: {
    position: "absolute",
    top: 40, // Adjust this for positioning on top of the screen
    left: 20, // Adjust this for left positioning
    zIndex: 10,
    // backgroundColor:"gray"
  },
  buttonText: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default App;
