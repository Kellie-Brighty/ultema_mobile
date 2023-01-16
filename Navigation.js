import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import SplashScreen from "./components/SplashScreen";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { GlobalContext } from "./store/context";
import AddNew from "./screens/AddNew";

const Stack = createNativeStackNavigator();

export default function Navigation() {

  const {user, registered} = useContext(GlobalContext)

  const UserAuthenticatedStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddNew"
          component={AddNew}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const UserUnauthenticatedStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Get_started"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  const UserUnregisteredStack = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Get_started"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        {user ? (
          <UserAuthenticatedStack />
        ) : (
          <>
            {registered ? (
              <UserUnauthenticatedStack />
            ) : (
              <UserUnregisteredStack />
            )}
          </>
        )}
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
