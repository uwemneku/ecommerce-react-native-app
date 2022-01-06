import { useFocusEffect } from "@react-navigation/native";
import React, { FC } from "react";
import { StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";

const SlideInBottomSheet: FC = ({ children }) => {
  const { height } = useWindowDimensions();
  const animatedValue = useSharedValue<number>(height / 2);

  const bottomSheetAnimation = useAnimatedStyle(() => ({
    transform: [
      {
        translateY: withSpring(animatedValue.value, {
          overshootClamping: true,
        }),
      },
    ],
  }));

  useFocusEffect(
    React.useCallback(() => {
      console.log("focus effect");

      animatedValue.value = withTiming(0, { duration: 500 });

      return () => (animatedValue.value = height / 2);
    }, [])
  );

  return (
    <Animated.ScrollView style={[styles.bottomSheet, bottomSheetAnimation]}>
      {children}
    </Animated.ScrollView>
  );
};

export default SlideInBottomSheet;

const styles = StyleSheet.create({
  bottomSheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30,
    paddingTop: 20,
    paddingHorizontal: 40,
  },
});
