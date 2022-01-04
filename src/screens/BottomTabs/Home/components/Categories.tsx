import { useTheme } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

interface props {
  category: string;
  isFocused: boolean;
}
const Categories = ({ category, isFocused }: props) => {
  const title = category
    .replace(/^[a-zA-Z]/g, category.charAt(0).toUpperCase())
    .trim();

  const { primary, text } = useTheme().colors;

  const animatedTextStyle = useAnimatedStyle(() => ({
    color: withTiming(isFocused ? primary : text, { duration: 250 }),
  }));

  const animatedViewStyle = useAnimatedStyle(() => ({
    backgroundColor: primary,
    width: withTiming(isFocused ? "100%" : "0%", { duration: 250 }),
  }));

  return (
    <View>
      <Animated.Text style={[styles.text, animatedTextStyle]}>
        {title}
      </Animated.Text>
      <Animated.View style={[styles.bar, animatedViewStyle]} />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
    padding: 10,
    fontSize: 18,
    fontFamily: "Raleway_600SemiBold",
  },
  bar: {
    height: 8,
  },
});
