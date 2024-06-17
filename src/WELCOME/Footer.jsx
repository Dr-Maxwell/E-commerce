/** @format */

import React from "react";
import logo from "./../../src/WELCOME/footerimg.png";
import PaymentMethod from "./../../src/WELCOME/paymentmethod.png";
import "./../../src/style.css";
const Footer = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        alignItems: "center",
        width: "100vw",
        justifyContent: "center",
        boxShadow: "0px 0.1px 7px rgba(0, 0, 0, 0.08)",
        minHeight: "300px",
        marginTop: "15rem",
        fontFamily: "Roboto, sans-serif",
        lineHeight: "2.2",
        background: "black",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          width: "100%",
          gap: "2rem",
          padding: "3rem 7rem",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: "1.2rem",
            alignItems: "center",
            width: "100%",
            gap: "0.5rem",
          }}
        >
          <img style={{ width: "60px", height: "60px" }} src={logo} alt="" />
          <h2> Biot Store.</h2>
        </div>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          voluptatem assumenda itaque dolorem qui, quibusdam doloribus rerum
          natus consectetur a!
        </div>
        <div>
          <img src={PaymentMethod} alt="" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "1rem",
          alignItems: "center",
          textAlign: "center",
          color: "var(--primaryColor)",
        }}
      >
        <h3
          style={{
            background: "var(--textColor)",
            width: "120px",
            height: "40px",
            borderRadius: "5px",
            paddingTop: "5px",
            color: "white",
            textAlign: "center",
          }}
        >
          Our Services
        </h3>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            justifyContent: "center",
            alignItems: "center",
            listStyle: "none",
            color: "white",
            gap: "4rem",
          }}
        >
          <li>Customer Support</li>
          <li>Product Packaging</li>
          <li>Payment Options</li>
          <li>Shopping Cart</li>
          <li>Shipping & Delivery</li>
          <li>Account Signup</li>
          <li>Product Filtering</li>
        </ul>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <span>
          Crafted || Developed by:~
          <a href="https://github.com/Dr-Maxwell">Spider-X</a>
        </span>
        <br />

        <span>&copy; {`${new Date().getFullYear()} All right reserved.`}</span>
      </div>
    </div>
  );
};

export default Footer;
