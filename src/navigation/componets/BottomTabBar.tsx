import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { FC, ReactNode, useEffect } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabRoute } from "../../@types/navigation";
import { useTheme } from "@react-navigation/native";
import { useAppSelector } from "../../hooks/redux";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

const BottomTabBar: FC<BottomTabBarProps> = ({ navigation, insets, state }) => {
  const { isTabBarVisible } = useAppSelector((state) => state.uiState);
  const animatedMargin = useSharedValue(0);
  const { background } = useTheme().colors;

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };
  const animatedStyle = useAnimatedStyle(() => ({
    // marginBottom:withTiming(animatedMargin.value, {duration:250})
  }));

  useEffect(() => {
    animatedMargin.value = isTabBarVisible ? 0 : -100;
  }, [isTabBarVisible]);

  return (
    <Animated.View
      style={[
        animatedStyle,
        styles.tabBarContainer,
        { backgroundColor: background },
      ]}
    >
      {routes.map((item, index) => {
        return (
          <Pressable
            onPress={() => handleNavigation(item.route)}
            key={item.route}
            style={{ padding: 10 }}
          >
            {item.icon(state.index === index)}
          </Pressable>
        );
      })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "white",
    paddingVertical: 10,
  },
});

export default BottomTabBar;

interface routeType {
  route: keyof BottomTabRoute;
  icon: (focused: boolean) => JSX.Element;
}
const IconColor = (focused: Boolean) =>
  focused ? "rgba(89, 86, 233, 1)" : "black";
const routes: routeType[] = [
  {
    route: "home",
    icon: (focused) => (
      <Ionicons
        name={focused ? "home" : "home-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
  {
    route: "favorite",
    icon: (focused) => (
      <Ionicons
        name={focused ? "heart" : "heart-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
  {
    route: "profile",
    icon: (focused) => (
      <Ionicons
        name={focused ? "person" : "person-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
  {
    route: "cart",
    icon: (focused) => (
      <Ionicons
        name={focused ? "cart" : "cart-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
];
