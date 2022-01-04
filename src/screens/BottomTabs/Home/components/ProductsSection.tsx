import React, { useEffect } from "react";
import { FlatList, FlatListProps, StyleSheet } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Products } from "../../../../@types";
import { Product } from "../../../../components";

const AnimatedFlatList =
  Animated.createAnimatedComponent<FlatListProps<Products>>(FlatList);

const ProductsSection = ({ products }: { products: Products[] }) => {
  const flatListRef = React.useRef<FlatList<Products>>(null);
  const progress = useSharedValue(1);

  useEffect(() => {
    progress.value = 0;
    const timeOut = setTimeout(() => {
      progress.value = withTiming(1, { duration: 500 });
      flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
    }, 500);
    return () => clearTimeout(timeOut);
  }, [products]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  return (
    <AnimatedFlatList
      style={[styles.container, animatedStyle]}
      data={products}
      renderItem={({ item }) => <Product {...item} />}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      horizontal={true}
      ref={flatListRef}
    />
  );
};

export default ProductsSection;

const styles = StyleSheet.create({
  container: {},
});
