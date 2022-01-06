import { useTheme } from "@react-navigation/native";
import React, { FC } from "react";
import {
  ColorValue,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from "react-native";

type color = "primary" | "secondary" | string;
export interface AppTextProps
  extends Pick<TextProps, "style" | "numberOfLines"> {
  weight?: "light" | "normal" | "bold" | "semiBold" | "extraBold";
  color?: "primary" | "secondary" | string;
  size?: "small" | "medium" | "large" | "extraLarge" | number;
  align?: TextStyle["textAlign"];
  // style?: StyleProp<TextStyle>
}
const AppText: FC<AppTextProps> = ({
  color,
  weight,
  size = "small",
  children,
  style,
  align = "left",
  ...props
}) => {
  const { primary } = useTheme().colors;

  const fontSize: TextStyle["fontSize"] =
    size === "small"
      ? 16
      : size === "medium"
      ? 18
      : size === "large"
      ? 24
      : size === "extraLarge"
      ? 40
      : typeof size === "number"
      ? size
      : 24;

  const fontWeight: TextStyle["fontWeight"] =
    weight === "light"
      ? "300"
      : weight === "normal"
      ? "normal"
      : weight === "semiBold"
      ? "600"
      : weight === "bold"
      ? "bold"
      : weight === "extraBold"
      ? "900"
      : "normal";

  const fontFamily: TextStyle["fontFamily"] =
    weight === "light"
      ? "Raleway_100Thin"
      : weight === "normal"
      ? "Raleway_400Regular"
      : weight === "semiBold"
      ? "Raleway_600SemiBold"
      : weight === "bold"
      ? "Raleway_900Black"
      : weight === "extraBold"
      ? "Raleway_800ExtraBold"
      : "Raleway_900Black";

  const textColor: TextStyle["color"] = color === "primary" ? primary : color;

  return (
    <Text
      style={[
        {
          color: textColor,
          fontSize,
          fontWeight,
          textAlign: align,
          fontFamily,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default AppText;

const styles = StyleSheet.create({});
