import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const SpecialOffer = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/specialoffer.png")}
        style={styles.img}
      />
      <View style={styles.discountBox}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>SpecialOffer</Text>
          <Image
            source={require("../../assets/images/shockEmoji.png")}
            style={styles.emoji}
          />
        </View>
        <Text style={styles.description}>
          We make sure you get the offer you need at best prices
        </Text>
      </View>
    </View>
  );
};

export default SpecialOffer;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "row",
    gap: 30,
    paddingHorizontal: 15,
    marginHorizontal: 5,
  },
  discountBox: {
    flexDirection: "column",
    gap: 8,
  },
  titleBox: {
    flexDirection: "row",
    gap: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
  },
  description: {
    fontSize: 12,
    width: 150,
  },
  emoji: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    // tintColor: "#F83758",
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
