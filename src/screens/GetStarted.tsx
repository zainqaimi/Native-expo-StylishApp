import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Height, Width } from "../../utils/Diementions";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

type homeNavProp = NativeStackNavigationProp<RootStackParamList, "Home">;
const GetStarted = () => {
  const navigation = useNavigation<homeNavProp>();
  const handlePress = () => {
    navigation.replace("Drawer");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <ImageBackground
        style={styles.img}
        source={require("../../assets/images/getstarted.png")}
      >
        <ImageBackground
           style={styles.bg}
           source={require("../../assets/images/bg.png")}
        >

        <Text style={styles.titale}>You want Authentic, here you go!</Text>
        <Text style={styles.subtitale}>Find it here, buy it now!</Text>
        <TouchableOpacity>
          <Text style={styles.btn} onPress={handlePress}>
            Get Started
          </Text>
        </TouchableOpacity>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: Width(100),
    height: Height(100),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  bg: {
    width: Width(100),
    height: Height(50),
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Height(40),

  },
  titale: {
    color: "white",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
    fontSize: 32,
    fontWeight: "semibold",
    width: Width(80),
  },
  subtitale: {
    color: "gray",
    textAlign: "center",
    fontSize: 14,
    width: Width(80),

    marginTop: Height(2),
  },
  btn: {
    width: Width(80),
    marginTop: Height(5),
    padding: 14,
    textAlign: "center",
    backgroundColor: "#F83758",
    color: "white",
    borderRadius: 5,
    fontWeight: "bold",
    fontSize: 18,
  },
});
