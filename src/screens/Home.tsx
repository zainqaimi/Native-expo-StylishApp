import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import SearchInput from "../components/SearchInput";
import FetchProducts from "../../context/FetchProducts";
import CategoryData from "../../context/CategoryData";
import { ScrollView } from "react-native-gesture-handler";
import DealOfDay from "../components/DealOfDay";
import AutoImageSlider from "../components/AutoImageSlider";
import SpecialOffer from "../components/SpecialOffer";
import TrandingProduct from "../components/TrandingProduct";
import NewArrivals from "../components/NewArrivals";
import Sponsered from "../components/Sponsered";
import { signUp } from "../../context/AuthContext";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <SearchInput />
      <CategoryData />
      <ScrollView>
        <AutoImageSlider />
        <DealOfDay />
        <FetchProducts />
        <SpecialOffer />

        <Image
          source={require("../../assets/images/flatandheals.png")}
          style={styles.heal}
        />
        <TrandingProduct />
        <NewArrivals />
        <Sponsered />
        <Text>Home</Text>
        <Text>Home</Text>
        <Text>Home</Text>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
  },
  heal: {
    width: "95%",
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
  },
});
