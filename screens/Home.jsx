import {
  StyleSheet,
  Text,
  View,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import No_Inspection from "../assets/no_active_inspection.png";
import Footer from "../components/Footer";
import { GlobalContext } from "../store/context";
import SearchBox from "../components/SearchBox";
import InspectionItems from "../components/InspectionItems";

const mainColor = "#01532E";

const Home = () => {
  const { inspections } = useContext(GlobalContext);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <View>
            <Text style={styles.title}>Inspection</Text>
          </View>
          {inspections.length !== 0 && <SearchBox />}

          {inspections.length !== 0 ? (
            <View style={styles.active_items}>
              <InspectionItems inspections={inspections} />
            </View>
          ) : (
            <View style={styles.no_active}>
              <Image source={No_Inspection} />
              <Text style={styles.first_subtext}>No Active Inspection</Text>
              <Text style={styles.second_subtext}>
                Your active inspections will show here
              </Text>
            </View>
          )}

          <View>
            <Footer />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: mainColor,
    textAlign: "center",
  },
  no_active: {
    justifyContent: "center",
    alignItems: "center",
  },
  active_items: {
    flex: 1,
    padding: 20
  },
  first_subtext: {
    fontSize: 24,
    fontWeight: "500",
    color: mainColor,
  },
  second_subtext: {
    fontSize: 16,
    fontWeight: "400",
    color: mainColor,
    marginTop: 8,
  },
});
