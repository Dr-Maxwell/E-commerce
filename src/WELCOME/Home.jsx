/** @format */

import React, { useState, useEffect, useContext } from "react";
import "./../WELCOME/Home.css";
import Nav from "./Nav";
import { AuthContext } from "../Context";
import { Header } from "./Header";
import LandingPage from "./LandingPage";
import FilterComponent from "./FilterComponent";
import Product from "../LANDINGPAGE/Product";
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
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "fixed",
          top: "0",
          right: "0",
          zIndex: "100",
          backgroundColor: "white",
        }}
      >
        <Header />
        <Nav size={windowWidth} />
      </div>

      <div
        className="homeCon"
        style={{
          display: "flex",
          marginTop: "150px", // Ensure this matches the height of your fixed header/nav
          flexDirection: "column",
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          // overflowY: "scroll", // Enable scrolling
        }}
      >
        <LandingPage />
        <FilterComponent />
        <Product />
      </div>
    </div>
  );
};

export default Home;
