import AnimatedLottieView from "lottie-react-native";
import React, { useRef } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewProps,
} from "react-native";
import { LikeLottie } from "../../assets";

interface Props extends Pick<ViewProps, "style"> {
  onPress?: () => void;
}

const LikeButton = ({ onPress, style }: Props) => {
  const lottieRef = useRef<AnimatedLottieView>(null);
  const progress = new Animated.Value(0);
  const handleLike = () => {
    lottieRef.current?.play(0, 1000);
    progress.setValue(1);
  };
  return (
    <TouchableOpacity
      onPress={handleLike}
      style={[styles.lottieWrapper, style]}
    >
      <AnimatedLottieView
        ref={lottieRef}
        autoPlay={false}
        progress={progress}
        duration={2000}
        loop={false}
        source={LikeLottie}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
    </TouchableOpacity>
  );
};

export default LikeButton;

const styles = StyleSheet.create({
  lottieWrapper: {
    backgroundColor: "#ffff",
    width: 60,
    height: 60,
    borderRadius: 30,
  },
});
