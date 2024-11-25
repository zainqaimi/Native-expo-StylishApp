import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Search from "../src/screens/BottomTabs/Search";
import SettingScreen from "../src/screens/BottomTabs/SettingScreen";
import Home from "../src/screens/Home";
import Wishlist from "../src/screens/BottomTabs/Wishlist";
import Cart from "../src/screens/BottomTabs/Cart";
import { Image, Text, View } from "react-native";
import { Height, Width } from "../utils/Diementions";

const Tabs = createBottomTabNavigator();
const TabsNavigation = () => {
  return (
    <Tabs.Navigator
      initialRouteName="drawerHome"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: Height(10),
          width: Width(100),
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: 2,
        },
      }}
    >
      <Tabs.Screen
        name="drawerHome"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                  marginTop: 20,
                }}
              >
                <Image
                  source={require("../assets/images/home.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "cover",
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? "red" : "black" }}
                >
                  Home
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                  marginTop: 20,
                }}
              >
                <Image
                  source={require("../assets/images/heart.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? "red" : "black" }}
                >
                  Wishlist
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  borderRadius: 50,
                  overflow: "hidden",
                  backgroundColor: focused ? "red" : "",
                  margin: 0,
                }}
              >
                <Image
                  source={require("../assets/images/cart.png")}
                  style={{
                    width: 20,
                    height: 20,
                    resizeMode: "contain",
                    tintColor: focused ? "white" : "black",
                  }}
                />
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingVertical: 5,
                  marginTop: 20,
                }}
              >
                <Image
                  source={require("../assets/images/search.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? "red" : "black" }}
                >
                  Search
                </Text>
              </View>
            );
          },
        }}
      />
      <Tabs.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  // paddingVertical: 5,
                  marginTop: 20,
                }}
              >
                <Image
                  source={require("../assets/images/settings.png")}
                  style={{
                    width: 24,
                    height: 24,
                    resizeMode: "contain",
                    tintColor: focused ? "red" : "black",
                  }}
                />
                <Text
                  style={{ fontSize: 10, color: focused ? "red" : "black" }}
                >
                  Settings
                </Text>
              </View>
            );
          },
        }}
      />
    </Tabs.Navigator>
  );
};

export default TabsNavigation;

// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import {
//   Image,
//   Text,
//   View,
//   StyleSheet,
//   ImageSourcePropType,
// } from "react-native";
// import { Height, Width } from "../utils/Diementions";
// import Search from "../src/screens/BottomTabs/Search";
// import SettingScreen from "../src/screens/BottomTabs/SettingScreen";
// import Home from "../src/screens/Home";
// import Wishlist from "../src/screens/BottomTabs/Wishlist";
// import Cart from "../src/screens/BottomTabs/Cart";

// const Tabs = createBottomTabNavigator();

// const TabsNavigation = () => {
//   return (
//     <Tabs.Navigator
//       initialRouteName="drawerHome"
//       screenOptions={{
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: styles.tabBarStyle,
//       }}
//     >
//       <Tabs.Screen
//         name="drawerHome"
//         component={Home}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               source={require("../assets/images/home.png")}
//               label="Home"
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Wishlist"
//         component={Wishlist}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               source={require("../assets/images/heart.png")}
//               label="Wishlist"
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Cart"
//         component={Cart}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabCircleIcon
//               source={require("../assets/images/cart.png")}
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Search"
//         component={Search}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               source={require("../assets/images/search.png")}
//               label="Search"
//               focused={focused}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="Settings"
//         component={SettingScreen}
//         options={{
//           tabBarIcon: ({ focused }) => (
//             <TabIcon
//               source={require("../assets/images/settings.png")}
//               label="Settings"
//               focused={focused}
//             />
//           ),
//         }}
//       />
//     </Tabs.Navigator>
//   );
// };

// // Typing props for TabIcon component
// interface TabIconProps {
//   source: ImageSourcePropType;
//   label: string;
//   focused: boolean;
// }

// // Reusable Tab Icon Component
// const TabIcon: React.FC<TabIconProps> = ({ source, label, focused }) => (
//   <View style={styles.iconContainer}>
//     <Image
//       source={source}
//       style={[styles.icon, { tintColor: focused ? "red" : "black" }]}
//     />
//     <Text style={[styles.iconLabel, { color: focused ? "red" : "black" }]}>
//       {label}
//     </Text>
//   </View>
// );

// // Typing props for TabCircleIcon component
// interface TabCircleIconProps {
//   source: ImageSourcePropType;
//   focused: boolean;
// }

// // Reusable Circular Icon Component for Cart
// const TabCircleIcon: React.FC<TabCircleIconProps> = ({ source, focused }) => (
//   <View
//     style={[
//       styles.iconContainer,
//       {
//         width: 52,
//         height: 52,
//         borderRadius: 50,
//         backgroundColor: focused ? "red" : "",
//         justifyContent: "center",
//         alignItems: "center",
//       },
//     ]}
//   >
//     <Image
//       source={source}
//       style={[
//         styles.icon,
//         { tintColor: focused ? "white" : "black", width: 20, height: 20 },
//       ]}
//     />
//   </View>
// );

// const styles = StyleSheet.create({
//   tabBarStyle: {
//     height: Height(10),
//     width: Width(100),
//     alignItems: "center",
//     justifyContent: "center",
//     paddingTop: 5,
//     borderTopWidth: 1,
//     borderTopColor: "#ddd",
//   },
//   iconContainer: {
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 5,
//     marginTop: 10,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
//   iconLabel: {
//     fontSize: 10,
//     textAlign: "center",
//     marginTop: 5,
//   },
// });

// export default TabsNavigation;
