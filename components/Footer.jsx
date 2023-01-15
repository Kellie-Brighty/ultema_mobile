import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Active_Icon from "../assets/active_footer.png";
import New_Icon from "../assets/new_footer.png";
import History_Icon from "../assets/history_footer.png";
import Settings_Icon from "../assets/settings_footer.png";
import { useRoute } from "@react-navigation/native";

const mainColor = "#01532E";

const Footer = () => {
  const route = useRoute();
  console.log(route.name);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={
          route.name === "Home" ? styles.footer_item_active : styles.footer_item
        }
      >
        <Image source={Active_Icon} />
        <Text style={styles.footer_icon_label}>Active</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer_item}>
        <Image source={New_Icon} />
        <Text style={styles.footer_icon_label}>New</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer_item}>
        <Image source={History_Icon} />
        <Text style={styles.footer_icon_label}>History</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer_item}>
        <Image source={Settings_Icon} />
        <Text style={styles.footer_icon_label}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopColor: "rgba(53, 53, 53, 0.5)",
    borderTopWidth: 0.5,
  },
  footer_item: {
    alignItems: "center",
    paddingVertical: 13,
  },
  footer_item_active: {
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: mainColor,
    paddingVertical: 13,
  },
  footer_icon_label: {
    marginTop: 11,
    fontSize: 16,
    letterSpacing: 0.15,
    fontWeight: "400",
    color: mainColor,
  },
});
