// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import SplashScreen from "../src/screens/onboarding/SplashScreen";
// import Login from "../src/screens/auth/login";
// import Signup from "../src/screens/auth/Signup";
// import ForgotPass from "../src/screens/auth/ForgotPass";
// import GetStarted from "../src/screens/GetStarted";
// import { StatusBar } from "expo-status-bar";
// import DrawerNavigation from "./DrawerNavigation";
// import Onboard from "../src/screens/onboarding/Onboard";
// import { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Stack = createNativeStackNavigator();

// const AppNavigator = () => {
//   const { user, isLoading } = useContext(AuthContext);
//   return (
//     // <NavigationContainer>
//     //   <StatusBar style="dark" />
//     //   <Stack.Navigator
//     //     initialRouteName="SplashScreen"
//     //     screenOptions={{ headerShown: false }}
//     //   >
//     //     <Stack.Screen name="GetStarted" component={GetStarted} />
//     //     <Stack.Screen name="Drawer" component={DrawerNavigation} />
//     //     <Stack.Screen name="SplashScreen" component={SplashScreen} />
//     //     <Stack.Screen name="Onboard" component={Onboard} />
//     //     <Stack.Screen name="Login" component={Login} />
//     //     <Stack.Screen name="Signup" component={Signup} />
//     //     <Stack.Screen name="ForgotPass" component={ForgotPass} />
//     //   </Stack.Navigator>
//     // </NavigationContainer>
//     <NavigationContainer>
//       {isLoading ? (
//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         </Stack.Navigator>
//       ) : user ? (
//         <Stack.Navigator
//           initialRouteName="GetStarted"
//           screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="GetStarted" component={GetStarted} />
//           <Stack.Screen name="Drawer" component={DrawerNavigation} />
//         </Stack.Navigator>
//       ) : (
//         <Stack.Navigator
//           initialRouteName="Login"
//           screenOptions={{ headerShown: false }}
//         >
//           <Stack.Screen name="Login" component={Login} />
//           <Stack.Screen name="Signup" component={Signup} />
//           <Stack.Screen name="ForgotPass" component={ForgotPass} />
//           <Stack.Screen name="Onboard" component={Onboard} />
//         </Stack.Navigator>
//       )}
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import SplashScreen from "../src/screens/onboarding/SplashScreen";
import Signup from "../src/screens/auth/Signup";
import ForgotPass from "../src/screens/auth/ForgotPass";
import DrawerNavigation from "./DrawerNavigation";
import Onboard from "../src/screens/onboarding/Onboard";
import Login from "../src/screens/auth/login";
import GetStarted from "../src/screens/GetStarted";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const authContext = useContext(AuthContext);

  // Ensure AuthContext is not null
  if (!authContext) {
    throw new Error("AuthContext must be used within an AuthProvider");
  }

  const { user, isLoading } = authContext;

  return (
    <NavigationContainer>
      {isLoading ? (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Loading" component={SplashScreen} />
        </Stack.Navigator>
      ) : user ? (
        <Stack.Navigator
          initialRouteName="GetStarted"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="Drawer" component={DrawerNavigation} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          <Stack.Screen name="Onboard" component={Onboard} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default AppNavigator;
