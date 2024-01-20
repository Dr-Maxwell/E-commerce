/** @format */

import React from "react";
import "./../../src/style.css";
import { useState } from "react";
const CategoryProduct = ({ avail, img, label, size }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        width: size > 700 ? "240px" : " ",
        height: size > 700 ? "70px" : " ",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        background: "var(--productBg)",
        borderRadius: "10px",
        fontFamily: "sans-serif",
        fontWeight: "lighter",
        cursor: "pointer",
        transition: "background 0.3s, color 0.3s",
      }}
      className={isHovered ? "hoverEffect" : ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        <img
          src={img}
          alt="Image"
          style={{
            width: "70%",
            height: "70%",
            borderRadius: "5px",
          }}
        />
      </div>

      <div
        style={{
          flex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: "10px",
        }}
      >
        <div
          style={{
            fontWeight: "lighter",
            fontFamily: "sans-serif",
            fontSize: size > 700 ? "1.2rem" : " ",
          }}
        >
          {label}
        </div>
        <div
          style={{
            fontWeight: "lighter",
            fontFamily: "your-light-weight-font-family",
            fontSize: size > 700 ? "1.2rem" : " ",
          }}
        >
          {avail} Item available
        </div>
      </div>
    </div>
  );
};

export default CategoryProduct;
