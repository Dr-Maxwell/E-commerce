/** @format */

import React, { useState } from "react";
import { Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DehazeIcon from "@mui/icons-material/Dehaze";
import logo from "./../../src/logosvg.jpeg";
import KeyboardArrowUpTwoToneIcon from "@mui/icons-material/KeyboardArrowUpTwoTone";
import KeyboardArrowDownTwoToneIcon from "@mui/icons-material/KeyboardArrowDownTwoTone";
import "./../../src/style.css";
import Handbag from "./../../src/handbag.jpeg";
import Headset from "./../../src/headset.png";
import Laptop from "./../../src/laptop.jpg";
import Sneaker from "./../../src/sneaker.jpg";
import Funiture from "./../../src/funiture.jpg";
import Book from "./../../src/book.jpg";
import CategoryProduct from "./CategoryProduct";
import LogoutIcon from "@mui/icons-material/Logout";
import "./../WELCOME/navquicklinks.css";
import "../WELCOME/logo.css";
import Userprofile from "./Userprofile";
import { useContext } from "react";
import { AuthContext } from "../Context";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import toast from "react-hot-toast";
const Nav = ({ size }) => {
  const [bool, setBool] = React.useState(false);
  const [showQuickLinks, setShowQuickLinks] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const HandleLogoutSession = () => {
    signOut(auth)
      .then(() => {
        toast.success(`Successfully Logout ${currentUser.user.email}`, {
          duration: 3000,
          position: "top-right",
        });
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "80px",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0px 10px 0px 10px",
        color: "var(--primaryColor)",
        position: "absolute",
        marginTop: "60px",
        background: "white",
        // backgroundColor: "black", // Semi-transparent black background
        // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",

        //boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        className="Logo"
        style={{
          display: "grid",
          justifyContent: "space-around",
          alignItems: "center",
          gap: "0.2rem",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <div className="logo_animation">
          <img
            style={{
              width: `${size > 700 ? "70px" : "40px"}`,
              height: `${size > 700 ? "70px" : "40px"}`,
            }}
            src={logo}
            alt=""
          />
        </div>
        <div style={{ textAlign: "left", marginLeft: "1rem" }}>
          <h2
            style={{
              color: "var(--primaryColor)",
              fontWeight: "bolder",
              margin: 0,
              width: "200px",
              fontSize: `${size > 700 ? " 1.7rem" : "12px"}`,
            }}
          >
            Spider-X-Max.
          </h2>
        </div>
      </div>
      <div
        className="quicklink_account_wrapper"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1200px",
        }}
      >
        <div
          className="quickLinks"
          style={{
            display: "flex",
            flexDirection: size > 700 ? "row" : "column",
            justifyContent: "center",
            alignItems: "center",
            width: size > 700 ? "none" : "100%", // Adjust the width as needed
            position: size > 700 ? "unset" : "fixed", // Use "fixed" instead of "absolute"
            top: size > 700 ? "0" : "180px",
            right: showQuickLinks || size > 700 ? "0" : "-100%",
            transform: showQuickLinks ? "translateX(0)" : "translateX(100%)",
            transition: "right 0.8s ease-in-out, transform 0.8s ease-in-out",
            zIndex: 1,
          }}
        >
          <div className="quicklinkWrapper">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  fontWeight: "lighter",
                  fontSize: size > 700 ? "1.2rem" : "",
                }}
              >
                Category
              </div>
              <div onClick={() => setBool((prev) => !prev)}>
                {!bool ? (
                  <KeyboardArrowDownTwoToneIcon />
                ) : (
                  <KeyboardArrowUpTwoToneIcon />
                )}
              </div>
            </div>

            <div
              className="Cartegory_Product"
              style={{
                display: `${bool ? "grid" : "none"}`,
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px",
                justifyContent: "center",
                marginTop: "1rem",
                position: size > 700 ? "absolute" : "unset",
                top: size > 700 ? "70px" : "",
                right: size > 700 ? "90px" : "",
                zIndex: size > 700 ? "1" : "",
              }}
            >
              <CategoryProduct
                size={size}
                avail={20}
                label="Funiture"
                img={Funiture}
              />
              <CategoryProduct
                size={size}
                avail={20}
                label="Handbag"
                img={Handbag}
              />
              <CategoryProduct
                size={size}
                avail={20}
                label="Sneaker"
                img={Sneaker}
              />
              <CategoryProduct
                size={size}
                avail={20}
                label="Laptop"
                img={Laptop}
              />
              <CategoryProduct
                size={size}
                avail={20}
                label="Headset"
                img={Headset}
              />
              <CategoryProduct size={size} avail={20} label="Book" img={Book} />
            </div>
          </div>
          <ul
            style={{
              listStyle: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1.2rem",
              flexDirection: size > 700 ? "row" : "column",
              color: "#666", // Adjust the color as needed
              fontWeight: "lighter",

              fontFamily: "Roboto, sans-serif",
              fontSize: size > 700 ? "1.3rem" : " ",
            }}
          >
            <li>Deals</li>
            <li> What's New</li>
            <li> Delivery</li>
          </ul>
        </div>
        <div
          className="cart_account"
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "2.5rem",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
          >
            {currentUser ? (
              <Userprofile user={currentUser} />
            ) : (
              <Button
                style={{ color: "var(--primaryColor)" }}
                startIcon={<AccountCircleIcon />}
                disabled
              >
                Account
              </Button>
            )}
          </div>
          <div>
            {size < 700 ? (
              <ShoppingCartOutlinedIcon
                fontSize="large"
                sx={{ color: "var(--primaryColor)" }}
              />
            ) : (
              <Button
                style={{ color: "var(--primaryColor)" }}
                startIcon={<ShoppingCartOutlinedIcon />}
              >
                Cart
              </Button>
            )}
          </div>
          <div>
            <Button
              style={{ color: "var(--primaryColor)" }}
              startIcon={<LogoutIcon />}
              onClick={() => {
                HandleLogoutSession();
              }}
            >
              LOGOUT
            </Button>
          </div>
        </div>
      </div>
      <div
        className="TaskBar"
        style={{ display: `${size > "700" ? "none" : "flex"} ` }}
        onClick={() => setShowQuickLinks((prev) => !prev)}
      >
        <DehazeIcon fontSize="large" style={{ color: "var(--primaryColor)" }} />
      </div>
    </div>
  );
};

export default Nav;
