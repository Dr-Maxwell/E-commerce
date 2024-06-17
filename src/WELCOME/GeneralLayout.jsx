/** @format */

import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../Context";
import Login from "./Login";
import Footer from "./Footer";
export const GeneralLayout = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { currentUser } = useContext(AuthContext);
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  useEffect(() => {
    updateWindowWidth();
    const handleResize = () => {
      updateWindowWidth();
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (!currentUser) return <Login />;
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
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
