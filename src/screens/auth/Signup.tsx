import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import { signUp } from "../../../context/AuthContext";
import { Height, Width } from "../../../utils/Diementions";
import { AuthContext } from "../../../context/AuthContext";
type loginNavProps = NativeStackNavigationProp<RootStackParamList, "Login">;

export default function Signup() {
  const { signUp } = useContext(AuthContext)!;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<loginNavProps>();
  const handleLogin = () => {
    navigation.navigate("Login");
  };
  const handleSignUp = async () => {
    try {
      console.log("signup...");
      await signUp(email, password);
      alert("usrer registered");
      navigation.navigate("Login");
    } catch (err) {
      alert("make sure your internet connection is established");
    } finally {
      setEmail("");
      setPassword("");
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.tophadding}>Create an account</Text>
      <View style={styles.inputBox}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/User.png")}
          />
          <TextInput
            style={styles.inputMail}
            placeholder="Username or Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/lock.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Image
            style={styles.icon}
            source={require("../../../assets/images/eye.png")}
          />
        </View>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/lock.png")}
          />
          <TextInput style={styles.input} placeholder="Confirm Password" />
          <Image
            style={styles.icon}
            source={require("../../../assets/images/eye.png")}
          />
        </View>
        <View>
          <Text style={styles.dis}>
            By clicking the Register button, you agree{"\n"} to the public offer
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.btn} onPress={handleSignUp}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
          <TouchableOpacity>
            <Text style={styles.Login} onPress={handleLogin}>
              Login
            </Text>
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
    paddingVertical: 15,
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
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  dis: {
    marginBottom: 20,
    color: "gray",
    fontSize: 14,
    paddingHorizontal: 5,
  },
  Login: {
    textAlign: "right",
    color: "#F83758",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  btn: {
    padding: 15,
    textAlign: "center",
    backgroundColor: "#F83758",
    color: "white",
    borderRadius: 5,
    fontWeight: 500,
    fontSize: 18,
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
    gap: 10,
  },
  socialIcon: {
    marginTop: 20,
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  create: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 3,
  },
});
