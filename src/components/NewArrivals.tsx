import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const NewArrivals = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/HotSale.png")}
        style={styles.img}
      />
      <View style={styles.textBox}>
        <View>
          <Text style={styles.text}>New Arrivals</Text>
          <Text>Summer’ 25 Collections</Text>
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View all</Text>
          <Image
            style={styles.icon}
            source={require("../../assets/images/arrow.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewArrivals;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    alignSelf: "center",
    marginVertical: 10,
  },
  img: {
    height: 188,
    alignSelf: "center",
    resizeMode: "contain",
  },
  textBox: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    paddingHorizontal: 5,
    // gap: 20,
    alignItems: "center",
  },
  text: {
    fontWeight: 500,
    fontSize: 18,
    marginBottom: 5,
  },

  icon: {
    width: 18,
    height: 20,
    resizeMode: "contain",
  },
  btn: {
    flexDirection: "row",
    backgroundColor: "#F83758",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    width: 110,
  },
  btnText: {
    color: "white",
    fontSize: 14,
  },
});
