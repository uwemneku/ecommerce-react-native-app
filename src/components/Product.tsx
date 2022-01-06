import React, { FC, useRef } from "react";
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppText from "./AppText";
import { DrawerRoutes, Products } from "../@types";
import { LikeLottie } from "../../assets";
import LottieView from "lottie-react-native";
import { useSharedValue, Value } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { LikeButton } from ".";

const Product = (props: Products) => {
  const { category, description, id, image: uri, price, rating, title } = props;
  const navigation = useNavigation<DrawerNavigationProp<DrawerRoutes>>();
  const lottieRef = useRef<LottieView>(null);
  const progress = new Animated.Value(0);
  const handleLike = () => {
    lottieRef.current?.play(0, 1000);
    progress.setValue(1);
  };
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("Product", { product: props })}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          width={100}
          height={100}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={styles.productInfo}>
        <AppText align="center" weight="bold" size="medium" numberOfLines={2}>
          {title}
        </AppText>
        <AppText>{rating.rate}</AppText>
        <AppText
          align="center"
          weight="bold"
          size="medium"
          color="primary"
          numberOfLines={2}
        >
          {`$ ${price}`}
        </AppText>
      </View>
      <LikeButton style={styles.lottieWrapper} />
    </Pressable>
  );
};

export default React.memo(Product, (prev, next) => prev.id === next.id);

const styles = StyleSheet.create({
  container: {
    width: 220,
    margin: 10,
  },
  image: {
    height: 157.21,
    width: 157.21,
    padding: 10,
    alignSelf: "center",
  },
  imageContainer: {
    borderRadius: 1000,
    overflow: "hidden",
    padding: 20,
    elevation: 3,
    backgroundColor: "white",
    alignSelf: "center",
  },
  productInfo: {
    backgroundColor: "white",
    marginTop: -57.21,
    paddingTop: 57.21,
    borderRadius: 20,
    height: 200,
    padding: 10,
    alignItems: "center",
  },
  lottieWrapper: {
    marginTop: -40,
    marginLeft: -10,
  },
});
