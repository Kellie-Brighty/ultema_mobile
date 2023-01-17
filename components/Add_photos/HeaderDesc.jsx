import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Back_Arrow from "../../assets/back_arrow.png";
import Right_Arrow from "../../assets/right_arrow.png";
import { useRoute } from "@react-navigation/native";

const mainColor = "#01532E";
const textColor = "#373737";

const HeaderDesc = ({ navigation }) => {
  const route = useRoute();

  return (
    <View style={styles.inspection_guide_container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={Back_Arrow} style={styles.back_arrow} />
      </TouchableOpacity>
      <Text style={styles.inspection_guide}>Inspection Guide</Text>
      <Image source={Right_Arrow} style={styles.right_arrow} />
      <Text style={styles.inspection_guide}>{route.name}</Text>
    </View>
  );
};

export default HeaderDesc;

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 32,
    textAlign: "center",
    color: mainColor,
  },
  inspection_guide_container: {
    backgroundColor: "#002D18",
    height: 50,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 23,
    flexDirection: "row",
    paddingLeft: 23,
  },
  inspection_guide: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 24,
  },
  back_arrow: {
    marginHorizontal: 12,
  },
  right_arrow: {
    marginHorizontal: 15,
  },
});
