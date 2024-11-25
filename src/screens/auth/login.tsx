// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import React, { useContext, useState } from "react";
// import { StatusBar } from "expo-status-bar";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { Height, Width } from "../../../utils/Diementions";
// import { AuthContext } from "../../../context/AuthContext";

// type MultiNavProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Signup" | "ForgotPass" | "GetStarted"
// >;

// export default function Login() {
//   const { signIn } = useContext(AuthContext)!;
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isPasswordVisible, setPasswordVisible] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const navigation = useNavigation<MultiNavProp>();

//   const handleSignup = () => {
//     navigation.navigate("Signup");
//   };

//   const handleForgotPass = () => {
//     navigation.navigate("ForgotPass");
//   };

//   const handleLogin = async () => {
//     try {
//       await signIn(email, password);
//       navigation.navigate("GetStarted");
//     } catch (err: any) {
//       Alert.alert("Login Failed", err.message || "Something went wrong");
//     } finally {
//       setEmail("");
//       setPassword("");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible((prev) => !prev);
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar />
//       <Text style={styles.tophadding}>Welcome Back!</Text>
//       <View style={styles.inputBox}>
//         <View style={styles.inputContainer}>
//           <Image
//             style={styles.icon}
//             source={require("../../../assets/images/User.png")}
//           />
//           <TextInput
//             style={styles.inputMail}
//             placeholder="Username or Email"
//             value={email}
//             onChangeText={setEmail}
//           />
//         </View>
//         <View style={styles.inputContainer}>
//           <Image
//             style={styles.icon}
//             source={require("../../../assets/images/lock.png")}
//           />
//           <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry={!isPasswordVisible}
//           />
//           <TouchableOpacity onPress={togglePasswordVisibility}>
//             <Image
//               style={styles.icon}
//               source={
//                 isPasswordVisible
//                   ? require("../../../assets/images/User.png")
//                   : require("../../../assets/images/eye.png")
//               }
//             />
//           </TouchableOpacity>
//         </View>
//         <View>
//           <Text style={styles.forgotPass} onPress={handleForgotPass}>
//             Forgot Password?
//           </Text>
//         </View>
//         <View>
//           <TouchableOpacity onPress={handleLogin}>
//             <Text style={styles.btn}>Login</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.other}>
//         <Text style={styles.or}>- OR Continue with -</Text>
//         <View style={styles.social}>
//           <TouchableOpacity>
//             <Image
//               style={styles.socialIcon}
//               source={require("../../../assets/images/Google.png")}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               style={styles.socialIcon}
//               source={require("../../../assets/images/iphone.png")}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               style={styles.socialIcon}
//               source={require("../../../assets/images/Facebook.png")}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.create}>
//           <Text style={styles.or}>Create An Account</Text>
//           <TouchableOpacity onPress={handleSignup}>
//             <Text style={styles.signup}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//   },
//   tophadding: {
//     fontSize: 36,
//     fontWeight: "bold",
//     width: Width(50),
//     marginTop: Height(12),
//   },
//   inputBox: {
//     width: "100%",
//     flexDirection: "column",
//     textAlign: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//     paddingTop: 30,
//   },
//   inputMail: {
//     width: "94%",
//     height: 45,
//     paddingHorizontal: 10,
//   },
//   input: {
//     width: "80%",
//     height: 45,
//     paddingHorizontal: 10,
//   },
//   inputContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderColor: "gray",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 10,
//     paddingVertical: 10,
//     justifyContent: "space-between",
//     marginBottom: 15,
//   },
//   icon: {
//     width: 24,
//     height: 24,
//     resizeMode: "contain",
//   },
//   forgotPass: {
//     marginBottom: 30,
//     color: "red",
//     textAlign: "right",
//     marginRight: 3,
//   },
//   btn: {
//     padding: 15,
//     textAlign: "center",
//     backgroundColor: "#F83758",
//     color: "white",
//     borderRadius: 5,
//     fontWeight: "500",
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   other: {
//     padding: 15,
//     textAlign: "center",
//     justifyContent: "center",
//   },
//   or: {
//     textAlign: "center",
//   },
//   social: {
//     flexDirection: "row",
//     justifyContent: "center",
//     marginTop: 10,
//     gap: 10,
//   },
//   socialIcon: {
//     marginTop: 20,
//     width: 60,
//     height: 60,
//     resizeMode: "contain",
//   },
//   create: {
//     marginTop: 25,
//     flexDirection: "row",
//     justifyContent: "center",
//     gap: 3,
//   },
//   signup: {
//     color: "red",
//     textDecorationLine: "underline",
//     fontWeight: "500",
//   },
// });

// import React from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Image,
//   TouchableOpacity,
//   Alert,
// } from "react-native";
// import { useNavigation } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { useForm, Controller } from "react-hook-form";
// import { StatusBar } from "expo-status-bar";
// import { Height, Width } from "../../../utils/Diementions";

// type MultiNavProp = NativeStackNavigationProp<
//   RootStackParamList,
//   "Signup" | "ForgotPass" | "GetStarted"
// >;

// type LoginFormInputs = {
//   email: string;
//   password: string;
// };

// export default function Login() {
//   const navigation = useNavigation<MultiNavProp>();
//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>();

//   const handleSignup = () => {
//     navigation.navigate("Signup");
//   };

//   const handleForgotPass = () => {
//     navigation.navigate("ForgotPass");
//   };

//   const handleLogin = (data: LoginFormInputs) => {
//     try {
//       // Replace with actual signIn logic
//       console.log("Login data submitted:", data);
//       navigation.navigate("GetStarted");
//     } catch (err) {
//       Alert.alert("Login Failed", "Invalid credentials");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <StatusBar />
//       <Text style={styles.tophadding}>Welcome Back!</Text>
//       <View style={styles.inputBox}>
//         {/* Email Field */}
//         <View style={styles.inputContainer}>
//           <Image
//             style={styles.icon}
//             source={require("../../../assets/images/User.png")}
//           />
//           <Controller
//             control={control}
//             name="email"
//             rules={{
//               required: "Email is required.",
//               pattern: {
//                 value: /^\S+@\S+\.\S+$/,
//                 message: "Enter a valid email.",
//               },
//             }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 style={[
//                   styles.inputMail,
//                   errors.email ? styles.inputError : styles.inputNormal,
//                 ]}
//                 placeholder="Username or Email"
//                 value={value}
//                 onChangeText={onChange}
//               />
//             )}
//           />
//         </View>
//         {errors.email && (
//           <Text style={styles.errorText}>{errors.email.message}</Text>
//         )}

//         {/* Password Field */}
//         <View style={styles.inputContainer}>
//           <Image
//             style={styles.icon}
//             source={require("../../../assets/images/lock.png")}
//           />
//           <Controller
//             control={control}
//             name="password"
//             rules={{
//               required: "Password is required.",
//               minLength: {
//                 value: 6,
//                 message: "Password must be at least 6 characters long.",
//               },
//             }}
//             render={({ field: { onChange, value } }) => (
//               <TextInput
//                 style={[
//                   styles.input,
//                   errors.password ? styles.inputError : styles.inputNormal,
//                 ]}
//                 placeholder="Password"
//                 value={value}
//                 onChangeText={onChange}
//                 secureTextEntry={true}
//               />
//             )}
//           />
//         </View>
//         {errors.password && (
//           <Text style={styles.errorText}>{errors.password.message}</Text>
//         )}

//         {/* Forgot Password */}
//         <Text style={styles.forgotPass} onPress={handleForgotPass}>
//           Forgot Password?
//         </Text>

//         {/* Login Button */}
//         <TouchableOpacity onPress={handleSubmit(handleLogin)}>
//           <Text style={styles.btn}>Login</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Additional Options */}
//       <View style={styles.other}>
//         <Text style={styles.or}>- OR Continue with -</Text>
//         <View style={styles.social}>
//           <TouchableOpacity>
//             <Image
//               style={styles.socialIcon}
//               source={require("../../../assets/images/Google.png")}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               style={styles.socialIcon}
//               source={require("../../../assets/images/iphone.png")}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity>
//             <Image
//               style={styles.socialIcon}
//               source={require("../../../assets/images/Facebook.png")}
//             />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.create}>
//           <Text style={styles.or}>Create An Account</Text>
//           <TouchableOpacity onPress={handleSignup}>
//             <Text style={styles.signup}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   );
// }
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useForm, Controller } from "react-hook-form";
import { StatusBar } from "expo-status-bar";
import { Height, Width } from "../../../utils/Diementions";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../utils/firebaseConfig";
// import { auth } from "../../../firebaseConfig"; // Adjust based on your file structure

type MultiNavProp = NativeStackNavigationProp<
  RootStackParamList,
  "Signup" | "ForgotPass" | "GetStarted"
>;

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function Login() {
  const navigation = useNavigation<MultiNavProp>();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const handleSignup = () => {
    navigation.navigate("Signup");
  };

  const handleForgotPass = () => {
    navigation.navigate("ForgotPass");
  };

  const handleLogin = async (data: LoginFormInputs) => {
    try {
      // Use Firebase Authentication
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigation.navigate("GetStarted");
    } catch (err: any) {
      let errorMessage = "Something went wrong. Please try again.";
      if (err.code === "auth/invalid-email") {
        errorMessage = "Invalid email address.";
      } else if (err.code === "auth/user-not-found") {
        errorMessage = "No account found with this email.";
      } else if (err.code === "auth/wrong-password") {
        errorMessage = "Incorrect password.";
      }
      Alert.alert("Login Failed", errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.tophadding}>Welcome Back!</Text>
      <View style={styles.inputBox}>
        {/* Email Field */}
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/User.png")}
          />
          <Controller
            control={control}
            name="email"
            rules={{
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Enter a valid email.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.inputMail,
                  errors.email ? styles.inputError : styles.inputNormal,
                ]}
                placeholder="Username or Email"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}

        {/* Password Field */}
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/lock.png")}
          />
          <Controller
            control={control}
            name="password"
            rules={{
              required: "Password is required.",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long.",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={[
                  styles.input,
                  errors.password ? styles.inputError : styles.inputNormal,
                ]}
                placeholder="Password"
                value={value}
                onChangeText={onChange}
                secureTextEntry={true}
              />
            )}
          />
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}

        {/* Forgot Password */}
        <Text style={styles.forgotPass} onPress={handleForgotPass}>
          Forgot Password?
        </Text>

        {/* Login Button */}
        <TouchableOpacity onPress={handleSubmit(handleLogin)}>
          <Text style={styles.btn}>Login</Text>
        </TouchableOpacity>
      </View>

      {/* Additional Options */}
      <View style={styles.other}>
        <Text style={styles.or}>- OR Continue with -</Text>
        <View style={styles.social}>
          <TouchableOpacity>
            <Image
              style={styles.socialIcon}
              source={require("../../../assets/images/Google.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.socialIcon}
              source={require("../../../assets/images/iphone.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              style={styles.socialIcon}
              source={require("../../../assets/images/Facebook.png")}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.create}>
          <Text style={styles.or}>Create An Account</Text>
          <TouchableOpacity onPress={handleSignup}>
            <Text style={styles.signup}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  tophadding: {
    fontSize: 36,
    fontWeight: "bold",
    width: Width(50),
    marginTop: Height(12),
  },
  inputBox: {
    width: "100%",
    flexDirection: "column",
    textAlign: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingTop: 30,
  },
  inputMail: {
    width: "94%",
    height: 45,
    paddingHorizontal: 10,
  },
  input: {
    width: "80%",
    height: 45,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 10,
    justifyContent: "space-between",
    marginBottom: 15,
  },
  inputError: {
    borderColor: "red",
  },
  inputNormal: {
    borderColor: "gray",
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  forgotPass: {
    marginBottom: 30,
    color: "red",
    textAlign: "right",
    marginRight: 3,
  },
  btn: {
    padding: 15,
    textAlign: "center",
    backgroundColor: "#F83758",
    color: "white",
    borderRadius: 5,
    fontWeight: "500",
    fontSize: 18,
    marginBottom: 10,
  },
  other: {
    padding: 15,
    textAlign: "center",
    justifyContent: "center",
  },
  or: {
    textAlign: "center",
  },
  social: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
    gap: 10,
  },
  socialIcon: {
    marginTop: 20,
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  create: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },
  signup: {
    color: "red",
    textDecorationLine: "underline",
    fontWeight: "500",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: -10,
    marginBottom: 10,
  },
});
