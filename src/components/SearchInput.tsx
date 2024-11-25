import { View, TextInput, StyleSheet, Image } from "react-native";
import React from "react";

const SearchInput = () => {
  return (
    <View style={styles.inputContainer}>
      <Image
        style={{ width: 20, height: 20, tintColor: "#BBBBBB" }}
        source={require("../../assets/images/searchinp.png")}
      />
      <TextInput style={styles.input} placeholder="Search any Product.." />
      <Image
        style={styles.icon}
        source={require("../../assets/images/mic.png")}
      />
    </View>
  );
};

export default SearchInput;
const styles = StyleSheet.create({
  inputContainer: {
    width: "95%",
    height: 50,
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ffffff",
    paddingHorizontal: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
  },
  input: {
    width: "82%",
    fontSize: 16,
    height: 50,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: "#BBBBBB",
    resizeMode: "contain",
  },
});
