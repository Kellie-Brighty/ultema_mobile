import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import GetStartedImg from "../assets/get_started.png";
import { SafeAreaView } from "react-native-safe-area-context";

const GetStarted = ({ navigation }) => {
  const mainColor = "#01532E";

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      <Animated.View style={styles.container}>
        <Image source={GetStartedImg} style={styles.image} />

        <View style={{ width: 320 }}>
          <Text
            style={{
              color: mainColor,
              fontSize: 36,
              fontWeight: "bold",
              textAlign: "center",
              width: "100%",
              marginBottom: 24,
            }}
          >
            Inspect seamlessly
          </Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 16,
              fontWeight: "600",
              marginBottom: 10,
            }}
          >
            Your car inspection just got faster and easier with Ultema.
          </Text>
          <Text style={{ textAlign: "center", fontSize: 15 }}>
            Log in to explore available options!
          </Text>
        </View>

        <View>
          <TouchableOpacity
            style={{
              backgroundColor: mainColor,
              width: 348,
              height: 48,
              borderRadius: 10,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={{ fontSize: 16, color: "#fff", fontWeight: "400" }}>
              Get Started
            </Text>
          </TouchableOpacity>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  image: {
    marginBottom: 16,
    width: Dimensions.get("window").width - 30,
  },
});
