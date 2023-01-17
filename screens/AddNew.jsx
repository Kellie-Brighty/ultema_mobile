import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Footer from "../components/Footer";
import Add_Icon from "../assets/add_icon.png";

const mainColor = "#01532E";
const textColor = "#373737";

const inspection_options = [
  {
    icon: Add_Icon,
    title: "Car Details",
    route: "Home",
  },
  {
    icon: Add_Icon,
    title: "Photos",
    route: "Photos",
  },
];

const AddNew = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>New Inspection</Text>
        <View style={styles.inspection_guide_container}>
          <Text style={styles.inspection_guide}>Inspection Guide</Text>
        </View>
      </View>

      <View style={styles.inspection_options_container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          {inspection_options.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.inspection_option}
              onPress={() => navigation.navigate(`${item.route}`)}
            >
              <Image style={styles.option_item} source={item.icon} />
              <Text style={styles.option_item}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

export default AddNew;

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
    justifyContent: "center",
    alignItems: "center",
    marginTop: 23,
  },
  inspection_guide: {
    color: "#fff",
    fontWeight: "500",
    fontSize: 24,
  },
  inspection_options_container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  inspection_option: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 0.5,
    borderColor: "rgba(53, 53, 53, 0.5)",
    padding: 20,
    borderRadius: 10,
    width: 185,
  },
  option_item: {
    marginHorizontal: 12,
  },
});
