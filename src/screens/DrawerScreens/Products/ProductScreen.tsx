import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  AppButton,
  AppText,
  LikeButton,
  SlideInBottomSheet,
} from "../../../components";
import { Ionicons } from "@expo/vector-icons";
import { DrawerScreenProps } from "@react-navigation/drawer";
import { DrawerRoutes } from "../../../@types";

const ProductScreen = ({
  navigation,
  route,
}: DrawerScreenProps<DrawerRoutes, "Product">) => {
  const { image, title, description, price } = route.params.product;
  const handleCart = () => {};
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-arrow-back" size={30} color="black" />
        <LikeButton style={styles.likeButton} />
      </View>
      <View>
        <Image
          source={{ uri: image }}
          width={100}
          height={100}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <SlideInBottomSheet>
        <AppText weight="bold" align="center">
          {title}
        </AppText>
        <AppText weight="normal">{description}</AppText>
        <View>
          <AppText weight="normal" align="center">
            Total
          </AppText>
          <AppText weight="bold" align="center" color="primary">
            {price}
          </AppText>
        </View>
        <AppButton onPress={handleCart} title="Add to basket" color="primary" />
      </SlideInBottomSheet>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  likeButton: {
    width: 40,
    height: 40,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
});
