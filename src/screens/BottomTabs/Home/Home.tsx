import React, { useEffect, useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { BottomTabRoute } from "../../../@types/navigation";
import { useGetAllProductsQuery } from "../../../services";
import { AppButton, AppText } from "../../../components";
import { AllProducts, ProductCategories } from "../../../@types";
import { allProductCategories } from "../../../constants";
import { Categories, ProductsSection } from "./components";
import LottieView from "lottie-react-native";
import { LoopLottie } from "../../../../assets";

const Home = () => {
  const { isError, isFetching, data, refetch } = useGetAllProductsQuery();
  const [category, setCategory] = useState<ProductCategories>("electronics");

  const allProducts = useMemo(() => {
    const value: AllProducts = {
      "men's clothing": [],
      "women's clothing": [],
      electronics: [],
      jewelery: [],
    };
    data &&
      data.map((item) => {
        const { category } = item;
        value[category].push(item);
      });
    return value;
  }, [data]);

  useEffect(() => {}, [data]);

  const navigation =
    useNavigation<BottomTabNavigationProp<BottomTabRoute, "Home">>();

  //@ts-ignore
  const toggleDrawer = () => navigation.toggleDrawer();
  return (
    <SafeAreaView style={styles.container}>
      <SimpleLineIcons
        name="menu"
        size={24}
        color="black"
        onPress={toggleDrawer}
      />
      <Pressable style={{ padding: 20 }}></Pressable>

      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <AppText weight="extraBold" size="extraLarge">
          Order Online Collect in store
        </AppText>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {allProductCategories.map((name) => (
            <Pressable
              key={name}
              onPress={() => setCategory(name)}
              style={{ margin: 10 }}
            >
              <Categories category={name} isFocused={name === category} />
            </Pressable>
          ))}
        </ScrollView>
        {data ? (
          <ProductsSection products={allProducts[category]} />
        ) : (
          <View>
            <LottieView
              source={LoopLottie}
              autoPlay={true}
              style={styles.loading}
            />
            {isError && (
              <View>
                <AppText weight="semiBold" size="small" align="center">
                  There seem to be an issue with your network
                </AppText>
                <AppButton title="Retry" onPress={refetch} />
              </View>
            )}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 0,
    flex: 1,
  },
  loading: {
    width: "100%",
  },
});
