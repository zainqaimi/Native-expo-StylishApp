import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width } = Dimensions.get("window");

const images = [
  { id: 1, uri: "../../assets/images/banner1.png" },
  { id: 2, uri: "https://via.placeholder.com/600/771796" },
  { id: 3, uri: "https://via.placeholder.com/600/24f355" },
];

const AutoImageSlider = () => {
  const scrollViewRef = useRef<ScrollView>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);

      if (scrollViewRef.current) {
        scrollViewRef.current.scrollTo({
          x: nextIndex * width,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      {/* Image Slider */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(event) => {
          const contentOffsetX = event.nativeEvent.contentOffset.x;
          const newIndex = Math.round(contentOffsetX / width);
          setCurrentIndex(newIndex);
        }}
      >
        {images.map((image) => (
          <View key={image.id} style={styles.imageContainer}>
            <Image source={{ uri: image.uri }} style={styles.image} />
          </View>
        ))}
      </ScrollView>

      {/* Dots for Pagination */}
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setCurrentIndex(index);
              scrollViewRef.current?.scrollTo({
                x: index * width,
                animated: true,
              });
            }}
          >
            <View
              style={[
                styles.dot,
                currentIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 5,
    borderRadius: 10,
    // overflow: "hidden",
  },
  imageContainer: {
    width: width,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 10,
    height: 150,
    borderRadius: 10,
    resizeMode: "cover",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "red",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
});

export default AutoImageSlider;
