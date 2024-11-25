import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Height, Width } from "../../../utils/Diementions";
export default function ForgotPass() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={styles.tophadding}>Forgot Password</Text>
      <View style={styles.inputBox}>
        <View style={styles.inputContainer}>
          <Image
            style={styles.icon}
            source={require("../../../assets/images/Mail.png")}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter your email address"
          />
        </View>
        <View>
          <Text style={styles.dis}>
            * We will send you a message to set or reset {"\n"}your new password
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.btn}>Submit</Text>
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
  input: {
    width: "94%",
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
    fontWeight: 500,
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
  dis: {
    marginBottom: 20,
    color: "gray",
    fontSize: 14,
    paddingHorizontal: 5,
  },
});
