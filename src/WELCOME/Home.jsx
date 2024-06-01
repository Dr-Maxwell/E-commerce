/** @format */

import React, { useState, useEffect, useContext } from "react";
import "./../WELCOME/Home.css";

import { AuthContext } from "../Context";
import LandingPage from "./LandingPage";
import FilterComponent from "./FilterComponent";
import Product from "../LANDINGPAGE/Product";
const Home = () => {
  const { currentUser } = useContext(AuthContext);

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
