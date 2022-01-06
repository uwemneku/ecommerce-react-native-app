import React from "react";
import { Image, SafeAreaView, StyleSheet, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import { OnboardingImage } from "../../../assets";
import AppButton from "../../components/AppButton";
import AppText from "../../components/AppText";
import { ScrollView } from "react-native-gesture-handler";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { onBoardingRoute } from "../../@types/navigation";

const Splash = () => {
  const navigation = useNavigation<NavigationProp<onBoardingRoute, "splash">>();
  const handleNavigation = () => navigation.navigate("login");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <AppText color="white" weight="bold" size={60} style={{ padding: 20 }}>
          Find your{`\n`}Gadget
        </AppText>
        <Image
          style={styles.image}
          source={OnboardingImage}
          resizeMethod="resize"
          resizeMode="cover"
        />
        <AppButton
          onPress={handleNavigation}
          color="white"
          title="Get started"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5956E9",
    padding: 10,
    paddingTop: 20,
  },
  image: {
    width: "100%",
    alignSelf: "center",
    height: 400,
  },
  gradient: {
    marginTop: -130,
    height: 150,
  },
});
