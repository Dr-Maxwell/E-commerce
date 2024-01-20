/** @format */

import React, { useState, useEffect, useContext } from "react";
import "./../WELCOME/Home.css";
import Nav from "./Nav";
import { AuthContext } from "../Context";
import { Header } from "./Header";
const Home = () => {
  const { currentUser } = useContext(AuthContext);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    // Update the window width initially
    updateWindowWidth();

    // Event listener for window resize
    const handleResize = () => {
      updateWindowWidth();
      // You can perform other actions based on the window width here
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="homeCon"
        style={{
          display: "flex",
          flexDirection: "column",
          Width: "100vw",
          height: "100vh",
        }}
      >
        <Header />
        <Nav size={windowWidth} />
      </div>
    </div>
  );
};

export default Home;
