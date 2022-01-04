import React from "react";
import { StyleSheet } from "react-native";
import {
  DefaultTheme,
  NavigationContainer,
  Theme,
} from "@react-navigation/native";
import { enableScreens } from "react-native-screens";
import AuthNavigator from "./src/navigation/AuthNavigator";
import { Provider } from "react-redux";
import { persistor, store } from "./src/store";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import {
  useFonts,
  Raleway_900Black,
  Raleway_600SemiBold,
  Raleway_800ExtraBold,
  Raleway_400Regular,
  Raleway_100Thin,
} from "@expo-google-fonts/raleway";

const MyTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgba(89, 86, 233, 1)",
    text: "#868686",
    background: "#F2F2F2",
  },
};

enableScreens();
const App = () => {
  const [fontsLoaded] = useFonts({
    Raleway_900Black,
    Raleway_600SemiBold,
    Raleway_800ExtraBold,
    Raleway_400Regular,
    Raleway_100Thin,
  });
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={MyTheme}>
          {fontsLoaded && <AuthNavigator />}
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
