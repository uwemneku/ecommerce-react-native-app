import React from "react";
import { View } from "react-native";
import { useAppSelector } from "../hooks/redux";
import DrawerNavigator from "./DrawerNavigator";
import OnboardingNavigation from "./OnboardingNavigation";

const AuthNavigator = () => {
  const { isLoggedIn } = useAppSelector((state) => state.authState);

  return (
    <View style={{ flex: 1 }}>
      {isLoggedIn ? <DrawerNavigator /> : <OnboardingNavigation />}
    </View>
  );
};

export default AuthNavigator;
