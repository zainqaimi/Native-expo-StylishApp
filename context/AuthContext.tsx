// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../utils/firebaseConfig";

// const signUp = async (email: string, password: string) => {
//   try {
//     const userCredential = await createUserWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log("User Created: ", userCredential.user);
//   } catch (error: any) {
//     console.error("Error Signing Up: ", error.message);
//   }
// };

// const signIn = async (email: string, password: string) => {
//   try {
//     const userCredential = await signInWithEmailAndPassword(
//       auth,
//       email,
//       password
//     );
//     console.log("User Signed In: ", userCredential.user);
//   } catch (error: any) {
//     console.error("Error Signing In: ", error.message);
//   }
// };

// export { signUp, signIn };

import React, { createContext, useState, useEffect, ReactNode } from "react";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";

interface AuthContextType {
  user: any;
  signUp: (email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setIsLoading(false);
    });
    return unsubscribe; // Cleanup listener
  }, []);

  const signUp = async (email: string, password: string) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Created: ", userCredential.user);
      setUser(userCredential.user);
    } catch (error: any) {
      console.error("Error Signing Up: ", error.message);
    }
  };

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Signed In: ", userCredential.user);
      setUser(userCredential.user);
    } catch (error: any) {
      console.error("Error Signing In: ", error.message);
    }
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      console.log("User Signed Out");
      setUser(null);
    } catch (error: any) {
      console.error("Error Signing Out: ", error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};
