import { Text, View, Image, ScrollView } from "react-native";
const logoImg = require('../assets/images/adaptive-icon.png');

export default function Index() {
  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "orange",
      }}
    >
      <Text style={{ fontSize: 20, color: "candy", fontStyle: "italic", fontWeight: "bold" }}>
        Hello World
      </Text>

      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "green",
          marginBottom: 10,
        }}
      >
        {/* Content here */}
      </View>
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "blue",
          marginBottom: 10,
        }}
      >
        {/* Content here */}
      </View>

      <View
        style={{
          width: 200,
          backgroundColor: "black",
          marginBottom: 10,
          flexDirection: "column",
          alignItems: "center", // Centering images horizontally
        }}
      >
        <Image source={logoImg} style={{ width: 200, height: 100 }} />
        <Image source={logoImg} style={{ width: 200, height: 100 }} />
        <Image source={logoImg} style={{ width: 200, height: 100 }} />
        <Image source={logoImg} style={{ width: 200, height: 100 }} />
        <Image source={logoImg} style={{ width: 200, height: 100 }} />
        <Image source={logoImg} style={{ width: 200, height: 100 }} />
      </View>

      {/* Adding a few more components to test scrolling */}
      <View
        style={{
          width: 200,
          height: 200,
          backgroundColor: "purple",
          marginBottom: 10,
        }}
      >
        {/* Content here */}
      </View>
    </ScrollView>
  );
}
