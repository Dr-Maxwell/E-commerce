/** @format */

import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebaseConfig";
import { products } from "./LANDINGPAGE/productdata";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setcurrentUser] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const extractPriceRange = (priceRange) => {
    const [min, max] = priceRange.split("-").map(Number);
    console.log(min, max);
    return { min, max };
  };

  const handleUserChoice = (userChoice, name) => {
    let filteredproduct;
    if (name == "priceRange") {
      const { min, max } = extractPriceRange(userChoice);
      filteredproduct = products.filter((product) => {
        const price = Number(product.productPrice);
        return price >= min && price <= max;
      });
    } else {
      filteredproduct = products.filter((product) => {
        return Object.values(product).includes(userChoice);
      });
    }
    setFilteredProducts(filteredproduct);
  };
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setcurrentUser(user);
      console.log(user);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ currentUser, products, filteredProducts, handleUserChoice }}
    >
      {children}
    </AuthContext.Provider>
  );
};
