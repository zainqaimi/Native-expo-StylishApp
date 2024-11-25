import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CategoryData = () => {
  const categories = [
    { id: 1, name: "Beauty", image: require("../assets/images/beauty.png") },
    { id: 2, name: "Fashion", image: require("../assets/images/fashion.png") },
    { id: 3, name: "Kids", image: require("../assets/images/kids.png") },
    { id: 4, name: "Mens", image: require("../assets/images/men.png") },
    { id: 5, name: "Womens", image: require("../assets/images/women.png") },
    { id: 6, name: "Kids", image: require("../assets/images/kids.png") },
    { id: 7, name: "Kids", image: require("../assets/images/beauty.png") },
    { id: 8, name: "Mens", image: require("../assets/images/men.png") },
    { id: 9, name: "Womens", image: require("../assets/images/women.png") },
    { id: 10, name: "Kids", image: require("../assets/images/kids.png") },
  ];
  const renderItem = ({ item }: { item: { name: string; image: any } }) => (
    <View style={styles.item}>
      <TouchableOpacity>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.filter}>
        <Text style={styles.filterHadding}>All Featured</Text>
        <View style={styles.sortBox}>
          <View style={styles.sort}>
            <Text>Sort</Text>
            <Image
              source={require("../assets/images/sort.png")}
              style={styles.icon}
            />
          </View>
          <View style={styles.sort}>
            <Text>Filter</Text>
            <Image
              source={require("../assets/images/filter.png")}
              style={styles.icon}
            />
          </View>
        </View>
      </View>
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};
export default CategoryData;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  item: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 8,
  },
  image: {
    width: 55,
    height: 55,
    marginBottom: 5,
  },
  name: {
    fontSize: 12,
    textAlign: "center",
  },
  filter: {
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    alignSelf: "center",
  },
  filterHadding: {
    fontWeight: "bold",
    fontSize: 18,
  },
  sort: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    rowGap: 10,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#F8F8F8",
    elevation: 0.3,
    shadowColor: "#000",
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: "contain",
    marginLeft: 4,
  },
  sortBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    justifyContent: "space-between",
  },
});
