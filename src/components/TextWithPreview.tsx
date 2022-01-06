import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppText } from ".";
import { AppTextProps } from "./AppText";

interface Props extends Omit<AppTextProps, "numberOfLines"> {
  content: string;
}

const TextWithPreview = ({ content, ...props }: Props) => {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <AppText {...props} numberOfLines={3}>
      {content}
    </AppText>
  );
};

export default TextWithPreview;
AppText.propTypes = {};

const styles = StyleSheet.create({});
