import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect } from "react";
// import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type SplashNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "SplashScreen"
>;

export default function SplashScreen() {
  const navigation = useNavigation<SplashNavProp>();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Onboard");
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Image
          source={require("../../../assets/images/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.text}>Stylish</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEBEB",
  },
  box: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 124,
    height: 100,
    marginRight: 5,
  },
  text: {
    color: "#F83758",
    fontSize: 40,
    fontWeight: "bold",
  },
});
