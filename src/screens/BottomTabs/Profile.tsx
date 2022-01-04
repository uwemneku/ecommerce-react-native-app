import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppButton } from "../../components";
import { useAppDispatch } from "../../hooks/redux";
import { logOut } from "../../store/features/authentication";

const Profile = () => {
  const dispatch = useAppDispatch();
  const handleLogOut = () => dispatch(logOut());
  return (
    <View>
      <AppButton onPress={handleLogOut}>
        <Text>Log out</Text>
      </AppButton>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
