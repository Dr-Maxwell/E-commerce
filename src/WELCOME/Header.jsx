/** @format */

import React from "react";
import "./../../src/style.css";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "center",
        background: "var(--primaryColor)",
        color: "var(--productBg)",
        minHeight: "50px",
        padding: "5px",
        zIndex: "1",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <AddIcCallIcon fontSize="10px" />
        <h4> +2348127474985</h4>
      </div>
      <div>
        <h4>Get 50% Off on selected items | Show now</h4>
      </div>
      <div>
        <h4> Eng </h4>
      </div>
    </div>
  );
};
