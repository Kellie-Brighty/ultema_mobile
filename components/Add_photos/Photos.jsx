import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderDesc from "./HeaderDesc";
import Footer from "../Footer";
import Image_Upload_Icon from "../../assets/image_upload.png";

const mainColor = "#01532E";
const textColor = "#373737";

const photoCollage = [
  {
    title: "Tyre",
    icon: Image_Upload_Icon,
  },
  {
    title: "Back",
    icon: Image_Upload_Icon,
  },
  {
    title: "Gear",
    icon: Image_Upload_Icon,
  },
  {
    title: "Back Left",
    icon: Image_Upload_Icon,
  },
  {
    title: "Roof",
    icon: Image_Upload_Icon,
  },
  {
    title: "Side Left Tyre",
    icon: Image_Upload_Icon,
  },
];

const Photos = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>New Inspection</Text>
        <HeaderDesc navigation={navigation} />
      </View>

      <View style={styles.main}>
        <FlatList
          data={photoCollage}
          renderItem={({ item }) => (
            <View style={styles.photo_item}>
              <TouchableOpacity
                style={styles.upload_container}
                onPress={() => navigation.navigate("CameraScreen")}
              >
                <Image source={item.icon} />
              </TouchableOpacity>
              <View style={styles.title_container}>
                <Text style={styles.photo_title}>{item.title}</Text>
              </View>
            </View>
          )}
          numColumns={2}
        />
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default Photos;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
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
  main: {
    flex: 1,
    paddingHorizontal: 5,
    paddingVertical: 13,
  },
  photo_item: {
    width: 200,
    height: 188,
    borderWidth: 0.5,
    margin: 1,
    justifyContent: "space-between",
    marginVertical: 15,
  },
  upload_container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title_container: {
    backgroundColor: "#767676",
    height: 64,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  photo_title: {
    color: "#fff",
    letterSpacing: 0.15,
    fontSize: 16,
    fontWeight: "400",
  },
});
