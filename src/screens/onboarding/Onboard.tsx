import { Image, StyleSheet } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
type OnboardNavProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function Onboard() {
  const navigation = useNavigation<OnboardNavProp>();
  const handleDone = () => {
    navigation.replace("Login");
  };

  return (
    <Onboarding
      onDone={handleDone}
      onSkip={handleDone}
      containerStyles={styles.container}
      titleStyles={styles.hadding}
      subTitleStyles={styles.subTitle}
      pages={[
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../../assets/images/product.png")}
              style={styles.image}
            />
          ),
          title: "Choose Products",
          subtitle:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../../assets/images/payment.png")}
              style={styles.image}
            />
          ),
          title: "Make Payment",
          subtitle:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis enim velit mollit.",
        },
        {
          backgroundColor: "#fff",
          image: (
            <Image
              source={require("../../../assets/images/order.png")}
              style={styles.image}
            />
          ),
          title: "Get Your Order",
          subtitle:
            "Amet minim mollit non deserunt ullamco est sit aliqua dolor amet sint. Velit officia consequat duis enim velit mollit.",
        },
      ]}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#EBEBEB",
    flexDirection: "column",
    paddingHorizontal: 20,
    textAlign: "center",
  },
  image: {
    width: 300,
    height: 300,
  },
  hadding: {
    fontSize: 34,
    fontWeight: "900",
    textAlign: "center",
  },
  subTitle: {
    color: "slate",
    textAlign: "center",
  },
});
