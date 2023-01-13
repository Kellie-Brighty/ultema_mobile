import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import GetStartedImg from "../assets/login_img.png";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

const Login = () => {
  const mainColor = "#01532E";
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const togglePassword = () => {
    setPasswordHidden((prevState) => !prevState);
  };

  return (
    <SafeAreaView style={{ flex: 1, marginTop: 50 }}>
      <Animated.View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <KeyboardAvoidingView
            style={{
              flex: 1,
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
            behavior="padding"
          >
            <Text
              style={{
                color: mainColor,
                fontSize: 36,
                fontWeight: "bold",
                textAlign: "center",
                width: "100%",
              }}
            >
              Login
            </Text>

            <Image source={GetStartedImg} style={styles.image} resizeMode />

            <View>
              <TextInput
                placeholder="Email address"
                style={styles.text_input}
                value={email}
                keyboardType="email-address"
              />
              <View style={styles.custom_input}>
                <TextInput
                  placeholder="Password"
                  style={[styles.inner_text_input]}
                  secureTextEntry={passwordHidden}
                  value={password}
                />

                {passwordHidden ? (
                  <TouchableOpacity onPress={() => togglePassword()}>
                    <Feather
                      name="eye"
                      size={24}
                      style={styles.password_icon}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity onPress={() => togglePassword()}>
                    <Feather
                      name="eye-off"
                      size={24}
                      style={styles.password_icon}
                    />
                  </TouchableOpacity>
                )}
              </View>
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
              >
                <Text
                  style={{ fontSize: 16, color: "#fff", fontWeight: "400" }}
                >
                  Log In
                </Text>
              </TouchableOpacity>
            </View>

            <View>
              <Text style={styles.text_below} >
                Get your login details from the admin to be able to inspect
              </Text>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </Animated.View>
    </SafeAreaView>
  );
};

export default Login;

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
  text_input: {
    borderWidth: 1,
    borderColor: "#767676",
    height: 56,
    marginVertical: 20,
    paddingHorizontal: 10,
    width: 340,
    borderRadius: 4,
    color: "#373737",
  },
  custom_input: {
    borderWidth: 1,
    borderColor: "#767676",
    height: 58,
    marginVertical: 20,
    paddingHorizontal: 10,
    width: 340,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 4,
  },
  inner_text_input: {
    height: "100%",
    width: "100%",
    color: "#373737",
  },
  password_icon: {
    marginLeft: -25,
    color: "rgba(53, 53, 53, 0.5)",
  },
  text_below: {
    fontSize: 14,
    fontWeight: "400",
    color: "#767676",
    width: 300,
    textAlign: 'center',
    lineHeight: 20
  }
});
