import { DrawerContentComponentProps } from "@react-navigation/drawer";
import React, { FC } from "react";
import { Pressable, StyleSheet, useWindowDimensions, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabRoute, DrawerRoutes } from "../../@types/navigation";
import { SimpleLineIcons } from "@expo/vector-icons";
import AppText from "../../components/AppText";
import { SafeAreaView } from "react-native-safe-area-context";

const DrawerContent: FC<DrawerContentComponentProps> = ({
  navigation,
  state,
}) => {
  const { width } = useWindowDimensions();
  const handleNavigation = ({
    icon,
    isBottomTabRoute,
    route,
  }: drawerRoutesType) => {
    navigation.toggleDrawer();
    isBottomTabRoute
      ? navigation.navigate("Home", { screen: route })
      : navigation.navigate(route);
  };
  return (
    <SafeAreaView style={{ paddingTop: width * 0.2 }}>
      {drawerRoutes.map((item, index) => {
        const { icon, route } = item;
        return (
          <Pressable
            onPress={() => handleNavigation(item)}
            key={item.route}
            style={styles.label}
          >
            {icon}
            <View style={styles.text}>
              <AppText size="small" color="white" weight="semiBold">
                {route}
              </AppText>
            </View>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  label: {
    padding: 20,
    flexDirection: "row",
  },
  text: {
    justifyContent: "center",
    borderColor: "rgba(225,225,225,0.4)",
    marginHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    flex: 1,
  },
});

// The routes that will be displayed in the drawer will be a combination of the bottom tab routes and the drawer routes.
interface drawerRoutesType {
  route:
    | keyof DrawerRoutes
    | keyof Pick<BottomTabRoute, "Favorite" | "Profile">;
  icon: JSX.Element;
  /**Indicates if the route is from bottom tabs */
  isBottomTabRoute: boolean;
}

const drawerRoutes: drawerRoutesType[] = [
  {
    route: "Profile",
    icon: <Ionicons name="person-outline" size={24} color="white" />,
    isBottomTabRoute: true,
  },
  {
    route: "My orders",
    icon: <Ionicons name="cart-outline" size={24} color="white" />,
    isBottomTabRoute: false,
  },
  {
    route: "Favorite",
    icon: <Ionicons name="heart-outline" size={24} color="white" />,
    isBottomTabRoute: true,
  },
  {
    route: "Delivery",
    icon: <SimpleLineIcons name="bag" size={24} color="white" />,
    isBottomTabRoute: false,
  },
  {
    route: "Settings",
    icon: <Ionicons name="settings-outline" size={24} color="white" />,
    isBottomTabRoute: false,
  },
];
