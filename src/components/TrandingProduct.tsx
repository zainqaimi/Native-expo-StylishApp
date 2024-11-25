import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const TrandingProduct = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <View style={styles.textBox}>
          <Text style={styles.title}>Trending Products </Text>
          <View style={styles.timeBox}>
            <Image
              style={styles.icon}
              source={require("../../assets/images/celender.png")}
            />
            <Text style={styles.time}>Last Date</Text>
            <Text style={styles.time}>29/02/22</Text>
            {/* <Text style={styles.time}>20s</Text>
            <Text style={styles.time}>remaining</Text> */}
          </View>
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

export default TrandingProduct;

const styles = StyleSheet.create({
  container: {
    width: "95%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    backgroundColor: "#FD6E87",
    alignSelf: "center",
    padding: 10,
    elevation: 2,
    marginVertical: 2,
  },
  subcontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "white",
    fontSize: 14,
    fontWeight: "semibold",
  },
  textBox: {
    flexDirection: "column",
    paddingVertical: 5,
    gap: 5,
  },
  timeBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 5,
    borderRadius: 10,
    gap: 2,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  time: {
    fontSize: 14,
    color: "white",
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 10,
    textAlign: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "transparent",
    width: 100,
  },
  btnText: {
    color: "white",
    fontSize: 14,
  },
});
