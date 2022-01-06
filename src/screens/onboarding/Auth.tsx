import { useFocusEffect, useTheme } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import Input from "./components/Input";
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { useAppDispatch } from "../../hooks/redux";
import { logIn } from "../../store/features/authentication";
import { SlideInBottomSheet } from "../../components";

const Auth = () => {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const togglePasswordVisibility = () => setSecureTextEntry(!secureTextEntry);
  const dispatch = useAppDispatch();
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
      animatedValue.value = withTiming(0, { duration: 500 });
    }, [])
  );

  const handleLogIn = () => {
    dispatch(logIn());
  };

  const { colors } = useTheme();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["rgba(250, 184, 195, 1)", "transparent"]}
        style={[styles.gradient]}
      />
      <View style={[styles.rings, { top: 200, left: 200 }]} />
      <View style={[styles.rings, { top: 10, left: 50 }]} />
      <AppText color="white" weight="bold" size={60} style={{ padding: 20 }}>
        Welcome{`\n`}back
      </AppText>
      <SlideInBottomSheet>
        <AppText size="medium" weight="bold">
          Login
        </AppText>
        <View style={{ marginVertical: 20 }}>
          <Input
            topIcon={
              <MaterialCommunityIcons
                name="email-multiple-outline"
                size={24}
                color={colors.text}
              />
            }
            topText="Email"
            InputProps={{ textContentType: "emailAddress" }}
          />
          <Input
            topText="Password"
            topIcon={<Feather name="lock" size={24} color={colors.text} />}
            rightAdornment={
              <Pressable
                onPress={togglePasswordVisibility}
                style={{ paddingHorizontal: 10 }}
              >
                <AppText color={colors.primary} weight="bold">
                  {secureTextEntry ? "Show" : "Hide"}
                </AppText>
              </Pressable>
            }
            InputProps={{ secureTextEntry, textContentType: "password" }}
          />
          <Pressable style={{ paddingHorizontal: 10 }}>
            <AppText color={colors.primary} weight="bold">
              Forgot passcode?
            </AppText>
          </Pressable>
        </View>
        <View style={{ marginVertical: 40 }}>
          <AppButton onPress={handleLogIn} color="primary" title="Login" />
          <AppText
            size="small"
            color={colors.primary}
            weight="bold"
            style={{ alignSelf: "center", marginVertical: 10 }}
          >
            Create Account
          </AppText>
        </View>
      </SlideInBottomSheet>
    </SafeAreaView>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5956E9",
  },
  bottomSheet: {
    flex: 1,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30,
    paddingTop: 20,
    paddingHorizontal: 40,
  },
  gradient: {
    width: 150,
    height: 150,
    marginTop: -50,
    borderRadius: 150,
    position: "absolute",
    right: 0,
  },
  rings: {
    width: 50,
    height: 50,
    borderRadius: 500,
    backgroundColor: "transparent",
    position: "absolute",
    borderColor: "rgba(112, 110, 253, 1)",
    borderWidth: 10,
  },
});
