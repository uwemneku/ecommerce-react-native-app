import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { FC, useEffect } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabRoute } from "../../@types/navigation";
import { useTheme } from "@react-navigation/native";
import { useAppSelector } from "../../hooks/redux";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const BottomTabBar: FC<BottomTabBarProps> = ({ navigation, insets, state }) => {
  const animatedMargin = useSharedValue(0);
  const { background } = useTheme().colors;

  const handleNavigation = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <Animated.View
      style={[styles.tabBarContainer, { backgroundColor: background }]}
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
    route: "Home",
    icon: (focused) => (
      <Ionicons
        name={focused ? "home" : "home-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
  {
    route: "Favorite",
    icon: (focused) => (
      <Ionicons
        name={focused ? "heart" : "heart-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
  {
    route: "Profile",
    icon: (focused) => (
      <Ionicons
        name={focused ? "person" : "person-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
  {
    route: "Cart",
    icon: (focused) => (
      <Ionicons
        name={focused ? "cart" : "cart-outline"}
        size={24}
        color={IconColor(focused)}
      />
    ),
  },
];
