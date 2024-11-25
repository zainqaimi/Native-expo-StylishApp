import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { DrawerActions, useNavigation } from "@react-navigation/native";

export default function HeaderScreen() {
  const navigation = useNavigation();

  return (
    <View style={Styles.main}>
      <TouchableOpacity
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Image
          source={require("../../assets/images/barIcon.png")}
          style={Styles.barIcon}
        />
      </TouchableOpacity>
      <Image
        source={require("../../assets/images/Headerlogo.png")}
        style={Styles.logo}
      />
      <TouchableOpacity>
        <Image
          source={require("../../assets/images/userimg.png")}
          style={Styles.user}
        />
      </TouchableOpacity>
    </View>
  );
}

const Styles = StyleSheet.create({
  main: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    // backgroundColor: "#F5F5F5",
    // elevation: 1,
    marginTop: 40,
  },
  barIcon: {
    width: 32,
    height: 32,
  },
  logo: {
    width: 112,
    height: 32,
  },
  user: {
    width: 32,
    height: 32,
  },
});
