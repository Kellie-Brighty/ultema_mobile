import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

const InspectionItems = ({ inspections }) => {
  return (
    <ScrollView style={styles.container}>
      {inspections.length !== 0 && (
        <View>
          {inspections.map((item, idx) => (
            <View key={idx} style={styles.item_container}>
              <Text style={styles.time_posted}>3 mins ago</Text>
              <View style={styles.item_data}>
                <Image source={item.image} />
                <View style={styles.item_description}>
                  <Text style={styles.item_name}>{item.item_name}</Text>
                  <Text style={styles.date_uploaded}>{item.date_uploaded}</Text>
                </View>
              </View>
              <TouchableOpacity style={styles.edit_btn}>
                <Text>Edit Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default InspectionItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
  },
  item_container: {},
  time_posted: {
    color: "rgba(53, 53, 53, 0.5)",
    fontSize: 14,
    fontWeight: "400",
  },
  item_data: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
  },
  item_description: {
    marginLeft: 10,
  },
  item_name: {
    fontWeight: "500",
    fontSize: 24,
    width: 120,
    lineHeight: 32,
  },
  date_uploaded: {
    fontWeight: "300",
    fontSize: 12,
    lineHeight: 18,
    marginTop: 10,
  },
  edit_btn: {
    borderWidth: 1,
    borderColor: "#111500",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 16,
  },
});
