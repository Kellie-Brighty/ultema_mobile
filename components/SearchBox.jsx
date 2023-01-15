import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Search_Icon from "../assets/search_icon.png";
import Search_Filter from "../assets/search_filter.png";

const SearchBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searcbox}>
        <Image source={Search_Icon} />
        <TextInput style={styles.textinput} placeholder="Search Category" />
        <TouchableOpacity>
          <Image source={Search_Filter} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 60,
    padding: 10,
  },
  searcbox: {
    borderWidth: 0.5,
    height: "100%",
    borderRadius: 32,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingRight: 30,
  },
  textinput: {
    height: "100%",
    width: "90%",
    marginLeft: 10,
  },
});
