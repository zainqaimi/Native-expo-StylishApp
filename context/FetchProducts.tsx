import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const URL = "https://fakestoreapi.com/products";

interface Card {
  id: number;
  title: string;
  image: string;
  description: string;
  price: number;
  rating: {
    rate: number;
    count: number;
  };
}

const fetchProducts = async (): Promise<Card[]> => {
  const response = await axios.get(URL);
  return response.data;
};

const FetchProducts = () => {
  const { data, isLoading, isError } = useQuery<Card[], Error>({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.error}>
        <Text>Error fetching data!</Text>
      </View>
    );
  }

  const renderCard = ({ item }: { item: Card }) => (
    <View style={styles.card}>
      <TouchableOpacity>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={styles.title}>{item.title.slice(0, 10)}</Text>
        <Text style={styles.discription}>{item.description.slice(0, 15)}</Text>
        <Text style={styles.title}>${item.price}</Text>
        <View style={styles.price}>
          <Text style={styles.discount}>${(item.price * 5).toFixed(2)}</Text>
          <Text style={styles.offer}>OFF 50%</Text>
        </View>
        <Text style={styles.rating}>
          Rating: {item.rating.rate} ({item.rating.count} reviews)
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={data ?? []}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  error: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    margin: 5,
    padding: 10,
    width: 170,
    height: 241,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "green",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    backgroundColor: "#ffffff",
  },
  image: {
    width: 150,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
    marginBottom: 2,
  },
  discription: {
    fontSize: 12,
  },
  discount: {
    fontSize: 12,
    color: "gray",
    textDecorationLine: "line-through",
    marginTop: 5,
  },
  offer: {
    color: "red",
    fontSize: 12,
    marginLeft: 10,
  },
  price: {
    fontSize: 12,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  rating: {
    fontSize: 12,
    marginTop: 5,
    color: "gray",
    marginBottom: 5,
  },
});

export default FetchProducts;
