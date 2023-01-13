import {
  Animated,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useRef, useContext } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Logo from "../assets/white_logo_icon.png";
import GetStarted from "./GetStarted";
import { GlobalContext } from "../store/context";
import Login from "../screens/Login";

const SplashScreen = ({ navigation }) => {
  const { registered } = useContext(GlobalContext);
  //SafeArea Values...
  const edges = useSafeAreaInsets();

  //Animation values...
  const startAnimation = useRef(new Animated.Value(0)).current;

  //Scaling down both logo and title...
  const scaleLogo = useRef(new Animated.Value(1)).current;
  const scaleTitle = useRef(new Animated.Value(1)).current;

  //Offset animation...
  const moveLogo = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
  const moveTitle = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;

  //Animate content...
  const contentTransition = useRef(
    new Animated.Value(Dimensions.get("window").height)
  ).current;

  const BGColor = "#01532E";

  //Animation logic here...
  useEffect(() => {
    //Starting animation after 500ms...
    setTimeout(() => {
      //Parallel animation...
      Animated.parallel([
        Animated.timing(startAnimation, {
          //For same height on non safeArea devices...
          toValue: -Dimensions.get("window").height + (edges.top + 65),
          useNativeDriver: true,
        }),
        Animated.timing(scaleLogo, {
          //Scaling to 0.35 from 1
          toValue: 0.3,
          useNativeDriver: true,
        }),
        Animated.timing(scaleTitle, {
          //Scaling to 0.8 from 1
          toValue: 0.8,
          useNativeDriver: true,
        }),
        Animated.timing(moveLogo, {
          //Moving from right to top most
          toValue: {
            x: Dimensions.get("window").width / 2 - 35,
            y: Dimensions.get("window").height / 2 - 5,
          },
          useNativeDriver: true,
        }),
        Animated.timing(moveTitle, {
          //Scaling to 0.8 from 1
          toValue: {
            x: 0,
            y: Dimensions.get("window").height / 2 - 90,
          },
          useNativeDriver: true,
        }),
        Animated.timing(contentTransition, {
          //Scaling to 0.8 from 1
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }, 1500);
  }, []);

  //Going to move up like navbar...
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          flex: 1,
          backgroundColor: BGColor,
          transform: [{ translateY: startAnimation }],
          zIndex: 1,
        }}
      >
        <Animated.View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Animated.Image
            source={Logo}
            style={{
              width: 100,
              height: 100,
              resizeMode: "contain",
              marginBottom: 20,
              transform: [
                { translateX: moveLogo.x },
                { translateY: moveLogo.y },
                { scale: scaleLogo },
              ],
            }}
          />
          <Animated.Text
            style={{
              color: "#fff",
              fontSize: 30,
              fontWeight: "bold",
              transform: [{ translateY: moveTitle.y }, { scale: scaleTitle }],
            }}
          >
            ULTEMA
          </Animated.Text>
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={[
          styles.second_container,
          { transform: [{ translateY: contentTransition }] },
        ]}
      >
        {registered ? (
          <Login navigation={navigation} />
        ) : (
          <GetStarted navigation={navigation} />
        )}
      </Animated.View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
  },
  second_container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: "#fff",
    zIndex: 0,
  },
});
