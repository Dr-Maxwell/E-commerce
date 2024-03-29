/** @format */

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
    });
    return () => {
      unsub();
    };
  }, []);
  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
