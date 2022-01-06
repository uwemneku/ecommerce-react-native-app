import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppText from "./AppText";

interface Props {
  color?: "white" | "primary" | "secondary" | "black";
  onPress: () => void;
  title: string;
}
const AppButton = ({ color = "white", onPress, title }: Props) => {
  const { colors } = useTheme();

  const backgroundColor =
    color === "primary"
      ? colors.primary
      : color === "secondary"
      ? colors.card
      : color === "black"
      ? "black"
      : "white"; // color === 'white'

  const textColor = color === "white" ? colors.primary : "white";

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, { backgroundColor }]}
      activeOpacity={0.8}
    >
      <AppText align="center" weight="bold" size="medium" color={textColor}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

export default AppButton;

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    width: "70%",
  },
});
