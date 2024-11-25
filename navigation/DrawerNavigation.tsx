import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Profile from "../src/screens/Profile";
import HeaderScreen from "../src/screens/HeaderScreen";
import TabsNavigation from "./TabsNavigation";

const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <HeaderScreen />,
      }}
    >
      <Drawer.Screen name="Home" component={TabsNavigation} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
