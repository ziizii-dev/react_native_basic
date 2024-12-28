import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

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

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.innerContainer}>
            <Text style={styles.header}>Data Input Form</Text>

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

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>

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
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
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
});

export default App;
