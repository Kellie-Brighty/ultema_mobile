import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navigation from "./Navigation";
import { GlobalProvider } from "./store/context";
GlobalProvider;

const App = () => {
  return (
    <GlobalProvider>
      <Navigation />
    </GlobalProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
