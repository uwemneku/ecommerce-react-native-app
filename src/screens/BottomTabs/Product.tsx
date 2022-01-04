import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabRoute } from "../../@types/navigation";
import { OnboardingImage } from "../../../assets";
import { useAppDispatch } from "../../hooks/redux";
import { hideTabBar, showTabBar } from "../../store/features/UI";

const Product = () => {
  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabRoute, "home">>();
  const dispatch = useAppDispatch();
  //@ts-ignore
  const toggleDrawer = () => navigation.toggleDrawer();
  useFocusEffect(() => {
    dispatch(hideTabBar());
    return () => dispatch(showTabBar());
  });
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{ width: "100%", height: 200 }}
        source={OnboardingImage}
        resizeMode="cover"
      />
      <Text></Text>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    // flex:0.5
    height: Dimensions.get("screen").height,
  },
});
